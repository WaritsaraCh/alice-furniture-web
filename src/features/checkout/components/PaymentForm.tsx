import { useState } from "react"
import { validatePayment } from "../validation"
import { LockIcon } from "lucide-react"


function formatCardNumber(value: string) {
  return value
    .replace(/\D/g, '')
    .slice(0, 16)
    .replace(/(.{4})/g, '$1 ')
    .trim()
}


function detectCardType(number: string) {
  const first = number.replace(/\s/g, '')[0]
  if (first === '4') return 'Visa'
  if (first === '5') return 'Mastercard'
  return null
}

export default function PaymentForm({
  payment,
  setPayment,
  setStep,
}: any) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [billingAddressSame, setBillingAddressSame] = useState(true)

  const handleNext = () => {
    const validation = validatePayment(payment)
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }
    setStep(4)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setStep(2)
    window.scrollTo(0, 0)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-300'}`
  
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1'

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Details
        </h2>
        <div className="flex items-center gap-2 text-green-600 text-sm mb-6">
          <LockIcon size={14} />
          <span>
            Your payment information is encrypted and secure
          </span>
        </div>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Name on Card *</label>
            <input
              className={inputClass('nameOnCard')}
              value={payment.nameOnCard}
              onChange={(e) =>
                setPayment((p: any) => ({
                  ...p,
                  nameOnCard: e.target.value,
                }))
              }
              placeholder="Alice Johnson"
            />
            {errors.nameOnCard && (
              <p className="text-red-500 text-xs mt-1">
                {errors.nameOnCard}
              </p>
            )}
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className={labelClass + ' mb-0'}>
                Card Number *
              </label>
              {detectCardType(payment.cardNumber) && (
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {detectCardType(payment.cardNumber)}
                </span>
              )}
            </div>
            <input
              className={inputClass('cardNumber')}
              value={payment.cardNumber}
              onChange={(e) =>
                setPayment((p: any) => ({
                  ...p,
                  cardNumber: formatCardNumber(e.target.value),
                }))
              }
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.cardNumber}
              </p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Expiry Date *</label>
              <input
                className={inputClass('expiry')}
                value={payment.expiry}
                onChange={(e) => {
                  let v = e.target.value
                    .replace(/\D/g, '')
                    .slice(0, 4)
                  if (v.length >= 3)
                    v = v.slice(0, 2) + '/' + v.slice(2)
                  setPayment((p: any) => ({
                    ...p,
                    expiry: v,
                  }))
                }}
                placeholder="MM/YY"
                maxLength={5}
              />
              {errors.expiry && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.expiry}
                </p>
              )}
            </div>
            <div>
              <label className={labelClass}>CVV *</label>
              <input
                className={inputClass('cvv')}
                value={payment.cvv}
                type="password"
                onChange={(e) =>
                  setPayment((p: any) => ({
                    ...p,
                    cvv: e.target.value
                      .replace(/\D/g, '')
                      .slice(0, 4),
                  }))
                }
                placeholder="•••"
                maxLength={4}
              />
              {errors.cvv && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.cvv}
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={billingAddressSame}
                onChange={(e) =>
                  setBillingAddressSame(e.target.checked)
                }
                className="h-4 w-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500"
              />
              <span className="text-sm text-gray-700 font-medium">
                Billing address same as shipping address
              </span>
            </label>
          </div>

          {!billingAddressSame && (
            <div className="space-y-4 pt-2 border-t border-gray-100">
              <p className="text-sm font-semibold text-gray-700">
                Billing Address
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    className={inputClass('')}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    className={inputClass('')}
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Address</label>
                <input
                  className={inputClass('')}
                  placeholder="123 Billing Street"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className={labelClass}>City</label>
                  <input
                    className={inputClass('')}
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input
                    className={inputClass('')}
                    placeholder="CA"
                  />
                </div>
                <div>
                  <label className={labelClass}>ZIP</label>
                  <input
                    className={inputClass('')}
                    placeholder="90210"
                  />
                </div>
              </div>
            </div>
          )}
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
          onClick={handleNext}
          className="px-8 py-2.5 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
        >
          Continue →
        </button>
      </div>
    </div>
  )
}