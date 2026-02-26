'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="mt-2 text-gray-500">
          Something unexpected happened.
        </p>

        <button
          onClick={reset}
          className="mt-6 rounded bg-black px-4 py-2 text-white"
        >
          Try again
        </button>
      </div>
    </div>
  )
}