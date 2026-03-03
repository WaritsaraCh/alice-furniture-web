"use client"

import { useState } from "react"
import { deliveryOptions } from "../constants"
import { ShippingForm, PaymentForm } from "../types"

export function useCheckout() {
  const [step, setStep] = useState(1)
  const [shipping, setShipping] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  })

  const [delivery, setDelivery] = useState(deliveryOptions[0])

  const [payment, setPayment] = useState<PaymentForm>({
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  return {
    step,
    setStep,
    shipping,
    setShipping,
    delivery,
    setDelivery,
    payment,
    setPayment,
  }
}