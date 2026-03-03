export type ShippingForm = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address1: string
  address2: string
  city: string
  state: string
  zip: string
  country: string
}

export type PaymentForm = {
  nameOnCard: string
  cardNumber: string
  expiry: string
  cvv: string
}

export type DeliveryOption = {
  id: string
  name: string
  description: string
  price: number
  days: string
}