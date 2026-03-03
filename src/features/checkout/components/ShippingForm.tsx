import Link from "next/link";
import { validateShipping } from "../validation";
import { useState } from "react";

export default function ShippingForm({ shipping, setShipping, setStep }: any) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  
  const handleNext = () => {
    const validation = validateShipping(shipping);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStep(2);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${errors[field] ? "border-red-400 bg-red-50" : "border-gray-300"}`;

  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Shipping Information
      </h2>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>First Name *</label>
            <input
              className={inputClass("firstName")}
              value={shipping.firstName}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  firstName: e.target.value,
                }))
              }
              placeholder="Alice"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Last Name *</label>
            <input
              className={inputClass("lastName")}
              value={shipping.lastName}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  lastName: e.target.value,
                }))
              }
              placeholder="Johnson"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Email Address *</label>
            <input
              type="email"
              className={inputClass("email")}
              value={shipping.email}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  email: e.target.value,
                }))
              }
              placeholder="alice@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input
              type="tel"
              className={inputClass("phone")}
              value={shipping.phone}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  phone: e.target.value,
                }))
              }
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelClass}>Address Line 1 *</label>
          <input
            className={inputClass("address1")}
            value={shipping.address1}
            onChange={(e) =>
              setShipping((s: any) => ({
                ...s,
                address1: e.target.value,
              }))
            }
            placeholder="123 Main Street"
          />
          {errors.address1 && (
            <p className="text-red-500 text-xs mt-1">{errors.address1}</p>
          )}
        </div>

        <div>
          <label className={labelClass}>
            Address Line 2{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            className={inputClass("address2")}
            value={shipping.address2}
            onChange={(e) =>
              setShipping((s: any) => ({
                ...s,
                address2: e.target.value,
              }))
            }
            placeholder="Apt, Suite, Unit, etc."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className={labelClass}>City *</label>
            <input
              className={inputClass("city")}
              value={shipping.city}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  city: e.target.value,
                }))
              }
              placeholder="Los Angeles"
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>State *</label>
            <input
              className={inputClass("state")}
              value={shipping.state}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  state: e.target.value,
                }))
              }
              placeholder="CA"
            />
            {errors.state && (
              <p className="text-red-500 text-xs mt-1">{errors.state}</p>
            )}
          </div>
          <div>
            <label className={labelClass}>ZIP Code *</label>
            <input
              className={inputClass("zip")}
              value={shipping.zip}
              onChange={(e) =>
                setShipping((s: any) => ({
                  ...s,
                  zip: e.target.value,
                }))
              }
              placeholder="90210"
            />
            {errors.zip && (
              <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelClass}>Country</label>
          <select
            className={inputClass("country")}
            value={shipping.country}
            onChange={(e) =>
              setShipping((s: any) => ({
                ...s,
                country: e.target.value,
              }))
            }
          >
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
        <Link
          href="/cart"
          className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
        >
          ← Back to Cart
        </Link>
        <button
          onClick={handleNext}
          className="px-8 py-2.5 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-700 transition-colors"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}
