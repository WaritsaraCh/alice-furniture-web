"use client";
import React, { useState } from 'react';
export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend or newsletter service
    setIsSubmitted(true);
    setEmail('');
    // Reset the submission state after a few seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to get exclusive offers, early access to new collections,
            and interior design tips.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500" />

            <button
              type="submit"
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition duration-300 whitespace-nowrap">

              Subscribe
            </button>
          </form>
          {isSubmitted &&
          <p className="mt-4 text-green-600">Thank you for subscribing!</p>
          }
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>);

}