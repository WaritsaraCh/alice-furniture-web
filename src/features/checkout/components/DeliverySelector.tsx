import { deliveryOptions } from "../constants"
import { PackageIcon, TruckIcon, ZapIcon } from "lucide-react"

export default function DeliverySelector({
  delivery,
  setDelivery,
  setStep,
}: any) {
  
  const handleNext = () => {
    setStep(3)
    window.scrollTo(0, 0)
  }
  
  const handleBack = () => {
    setStep(1)
    window.scrollTo(0, 0)
  }

  // ฟังก์ชันช่วยดึง Icon เผื่อในไฟล์ constants.ts ไม่ได้ใส่ Icon ไว้
  const getIcon = (id: string) => {
    switch (id) {
      case 'standard': return <PackageIcon size={20} />
      case 'express': return <TruckIcon size={20} />
      case 'overnight': return <ZapIcon size={20} />
      default: return <PackageIcon size={20} />
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Delivery Method
      </h2>
      
      <div className="space-y-4">
        {deliveryOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setDelivery(option)}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
              delivery.id === option.id 
                ? 'border-amber-600 bg-amber-50' 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`p-2 rounded-lg ${
                    delivery.id === option.id 
                      ? 'bg-amber-100 text-amber-600' 
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  
                  {getIcon(option.id)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    {option.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {option.days}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-bold text-gray-800">
                  {option.price === 0
                    ? 'Free'
                    : `$${option.price.toFixed(2)}`}
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    delivery.id === option.id 
                      ? 'border-amber-600' 
                      : 'border-gray-300'
                  }`}
                >
                  {delivery.id === option.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Navigation Buttons (ปุ่มย้อนกลับ และ ดำเนินการต่อ) */}
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