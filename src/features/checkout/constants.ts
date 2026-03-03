import { DeliveryOption } from "./types"

export const STEPS = ["Shipping", "Delivery", "Payment", "Review"]

export const deliveryOptions: DeliveryOption[] = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "Delivered in 5-7 business days",
    price: 0,
    days: "5-7 business days",
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "Delivered in 2-3 business days",
    price: 15,
    days: "2-3 business days",
  },
]