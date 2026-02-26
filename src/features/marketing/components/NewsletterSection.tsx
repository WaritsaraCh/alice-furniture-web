'use client'

import { useEffect, useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [status])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.includes('@')) {
      setStatus('error')
      return
    }

    try {
      setStatus('loading')

      // 🔥 Future: call API here
      // await subscribeToNewsletter(email)

      await new Promise((resolve) => setTimeout(resolve, 1000))

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-amber-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Join Our Newsletter
          </h2>

          <p className="mb-8 text-gray-600">
            Subscribe to get exclusive offers, early access
            to new collections, and interior design tips.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="whitespace-nowrap rounded-md bg-amber-600 px-6 py-3 font-medium text-white transition hover:bg-amber-700 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-green-600">
              Thank you for subscribing!
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-red-600">
              Please enter a valid email address.
            </p>
          )}

          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}