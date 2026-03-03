"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useCart } from "@/features/cart/cart.context"
import { useCheckout } from "@/features/checkout/hooks/useCheckout"

import CheckoutStepper from "@/features/checkout/components/CheckoutStepper"
import ShippingForm from "@/features/checkout/components/ShippingForm"
import DeliverySelector from "@/features/checkout/components/DeliverySelector"
import PaymentForm from "@/features/checkout/components/PaymentForm"
import ReviewStep from "@/features/checkout/components/ReviewStep"
import OrderSummary from "@/features/checkout/components/OrderSummary"

export default function CheckoutPage() {
  const router = useRouter()
  const {
    cart,
    clearCart,
    totalPrice 
  } = useCart()

  const checkout = useCheckout()


  const subtotal = totalPrice
  const tax = subtotal * 0.1
  const total = subtotal + tax + checkout.delivery.price


  const handlePlaceOrder = () => {
    clearCart()
    router.push("/orders/123") 
  }


  const handleBack = () => {
    checkout.setStep((s) => s - 1)
    window.scrollTo(0, 0)
  }

  return (
    <main className="w-full bg-gray-50 min-h-screen">
     
      <CheckoutStepper currentStep={checkout.step} />

      {/* Main Content (Grid Layout ซ้าย-ขวา แบบต้นฉบับ) */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: ฟอร์มข้อมูล (กินพื้นที่ 2/3) */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              
              {/* แสดง Form ตามสเต็ปปัจจุบัน */}
              {checkout.step === 1 && <ShippingForm {...checkout} />}
              {checkout.step === 2 && <DeliverySelector {...checkout} />}
              {checkout.step === 3 && <PaymentForm {...checkout} />}
              {checkout.step === 4 && (
                <ReviewStep
                  cart={cart}
                  shipping={checkout.shipping}
                  delivery={checkout.delivery}
                  payment={checkout.payment}
                  subtotal={subtotal}
                  tax={tax}
                  total={total}
                  setStep={checkout.setStep}
                  onPlaceOrder={handlePlaceOrder}
                />
              )}

             

            </div>
          </div>

          {/* Right Column: สรุปบิล Order Summary (กินพื้นที่ 1/3) */}
          <div className="lg:w-1/3">
           <OrderSummary
              cart={cart}
              subtotal={subtotal}
              delivery={checkout.delivery}
              tax={tax}
              total={total}
            />
          </div>

        </div>
      </div>
    </main>
  )
}