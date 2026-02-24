"use client";
import React from 'react';
const testimonials = [
{
  id: 1,
  name: 'Sarah Johnson',
  role: 'Interior Designer',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  quote:
  'The quality of the furniture is exceptional. My clients are always impressed when I recommend pieces from FurnitureHaven.'
},
{
  id: 2,
  name: 'Michael Rodriguez',
  role: 'Homeowner',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  quote:
  'We furnished our entire living room with pieces from here. The delivery was prompt, and everything arrived in perfect condition.'
},
{
  id: 3,
  name: 'Emily Chen',
  role: 'Apartment Renter',
  image:
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
  quote:
  'As someone living in a small apartment, their space-saving furniture has been a game-changer. Stylish and functional!'
}];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) =>
          <div
            key={testimonial.id}
            className="bg-gray-50 p-6 rounded-lg shadow-sm">

              <div className="flex items-center mb-4">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4" />

                <div>
                  <h4 className="font-medium text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) =>
              <svg
                key={i}
                className="w-5 h-5 text-amber-500 fill-current"
                viewBox="0 0 24 24">

                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}