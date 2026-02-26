'use client'

import { testimonials } from '../data/testimonials.mock'
import { Testimonial } from '../types/testimonial.types'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mt-4 flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-amber-500' : 'text-gray-300'
          } fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-xl text-gray-600">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial: Testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <p className="italic text-gray-600">
                "{testimonial.quote}"
              </p>

              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}