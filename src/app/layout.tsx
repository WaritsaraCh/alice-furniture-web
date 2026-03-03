import { Header } from "@/components/shared/Header"
import "./globals.css"
import { CartProvider } from "@/features/cart/cart.context"
import { Footer } from "@/components/shared/Footer"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alice Furniture Land", 
  description: "Shop the best furniture for your home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}