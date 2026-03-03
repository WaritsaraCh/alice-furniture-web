import { LockIcon } from "lucide-react"

export default function OrderSummary({
  cart,
  subtotal,
  delivery,
  tax,
  total,
}: any) {
  // เช็คป้องกันกรณีโหลดหน้าเว็บแล้วข้อมูลยังไม่มา
  if (!cart || !delivery) return null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-6">
      <h3 className="font-bold text-gray-800 text-lg mb-5">
        Order Summary
      </h3>

      <div className="space-y-3 mb-5 max-h-64 overflow-y-auto">
        {cart.map((item: any) => {
          const price = item.product.salePrice || item.product.price
          return (
            <div
              key={item.product.id}
              className="flex items-center gap-3"
            >
              <div className="relative flex-shrink-0">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {item.product.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.product.category}
                </p>
              </div>
              <p className="text-sm font-semibold text-gray-800">
                ${(price * item.quantity).toFixed(2)}
              </p>
            </div>
          )
        })}
      </div>

      <div className="border-t border-gray-100 pt-4 space-y-2.5">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">
            {delivery.price === 0
              ? 'Free'
              : `$${delivery.price.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Tax (10%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-gray-900 text-base border-t border-gray-100 pt-2.5">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <LockIcon size={12} />
          <span>Secure 256-bit SSL encryption</span>
        </div>
      </div>
    </div>
  )
}