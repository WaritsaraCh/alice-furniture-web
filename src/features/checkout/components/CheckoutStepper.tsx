import { Fragment } from "react/jsx-runtime"
import { STEPS } from "../constants"
import { CheckIcon } from "lucide-react"

export default function CheckoutStepper({
  currentStep,
}: {
  currentStep: number
}) {
  return (
    <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center max-w-2xl mx-auto">
            {STEPS.map((step, index) => {
              const stepNum = index + 1
              const isCompleted = currentStep > stepNum
              const isCurrent = currentStep === stepNum
              return (
                <Fragment key={step}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isCompleted ? 'bg-amber-600 text-white' : isCurrent ? 'border-2 border-amber-600 text-amber-600 bg-white' : 'border-2 border-gray-300 text-gray-400 bg-white'}`}
                    >
                      {isCompleted ? <CheckIcon size={16} /> : stepNum}
                    </div>
                    <span
                      className={`text-xs mt-1 font-medium hidden sm:block ${isCurrent ? 'text-amber-600' : isCompleted ? 'text-gray-700' : 'text-gray-400'}`}
                    >
                      {step}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${currentStep > stepNum ? 'bg-amber-600' : 'bg-gray-200'}`}
                    />
                  )}
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
  )
}