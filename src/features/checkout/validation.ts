import { ShippingForm, PaymentForm } from "./types"

export function validateShipping(data: ShippingForm) {
  const errors: Record<string, string> = {}

  const required: (keyof ShippingForm)[] = [
    'firstName',
    'lastName',
    'email',
    'phone',
    'address1',
    'city',
    'state',
    'zip',
  ]

  required.forEach((field) => {
    if (!data[field] || !data[field].trim()) {
      errors[field] = 'This field is required'
    }
  })

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  return errors
}

export function validatePayment(data: PaymentForm) {
  const errors: Record<string, string> = {}

  if (!data.nameOnCard.trim()) errors.nameOnCard = 'Name on card is required'
  
  if (data.cardNumber.replace(/\s/g, '').length < 16)
    errors.cardNumber = 'Please enter a valid card number'
    
  if (!data.expiry.match(/^\d{2}\/\d{2}$/))
    errors.expiry = 'Please use MM/YY format'
    
  if (data.cvv.length < 3) errors.cvv = 'CVV must be 3-4 digits'

  return errors
}