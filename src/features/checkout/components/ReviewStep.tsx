import React from "react"

function detectCardType(number: string) {
  if (!number) return null
  const first = number.replace(/\s/g, '')[0]
  if (first === '4') return 'Visa'
  if (first === '5') return 'Mastercard'
  return null
}

export default function ReviewStep({
  cart,
  shipping,
  delivery,
  payment,
  subtotal,
  tax,
  total,
  onPlaceOrder,
  setStep,
}: any) {
  
  const handleBack = () => {
    setStep(3)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Review Your Order
      </h2>

      {/* Items */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
          Order Items
        </h3>
        <div className="space-y-3">
          {cart.map((item: any) => {
            const price = item.product.salePrice || item.product.price
            return (
              <div
                key={item.product.id}
                className="flex items-center gap-4 py-3 border-b border-gray-100"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 truncate">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-semibold text-gray-800">
                  ${(price * item.quantity).toFixed(2)}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Shipping To
          </p>
          <p className="text-sm font-medium text-gray-800">
            {shipping.firstName} {shipping.lastName}
          </p>
          <p className="text-sm text-gray-600">
            {shipping.address1}
          </p>
          {shipping.address2 && (
            <p className="text-sm text-gray-600">
              {shipping.address2}
            </p>
          )}
          <p className="text-sm text-gray-600">
            {shipping.city}, {shipping.state} {shipping.zip}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Delivery
          </p>
          <p className="text-sm font-medium text-gray-800">
            {delivery.name}
          </p>
          <p className="text-sm text-gray-600">{delivery.days}</p>
          <p className="text-sm font-semibold text-amber-600 mt-1">
            {delivery.price === 0
              ? 'Free'
              : `$${delivery.price.toFixed(2)}`}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Payment
          </p>
          <p className="text-sm font-medium text-gray-800">
            {detectCardType(payment.cardNumber) || 'Card'}
          </p>
          <p className="text-sm text-gray-600">
            **** **** ****{' '}
            {payment.cardNumber.replace(/\s/g, '').slice(-4) ||
              '****'}
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="bg-amber-50 rounded-xl p-5 space-y-3">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span>
            {delivery.price === 0
              ? 'Free'
              : `$${delivery.price.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-gray-900 text-lg border-t border-amber-200 pt-3">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        <button
          onClick={handleBack}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
        >
          ← Back
        </button>
        <button
          onClick={onPlaceOrder}
          className="px-8 py-2.5 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}