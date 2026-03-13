import type { Metadata } from "next"
import "./globals.css"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import PageLoader from "@/components/loader/PageLoader"

import { Toaster } from "react-hot-toast"

import { Orbitron, Inter, JetBrains_Mono } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ega Herawati",
  description:
    "Portfolio of a full-stack engineer with a background in medicine.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" className="dark" suppressHydrationWarning>

      <body
        className={`
          ${orbitron.variable}
          ${inter.variable}
          ${mono.variable}

          font-body
          antialiased

          min-h-dvh
          flex
          flex-col
        `}
      >

        <PageLoader>

          <Navbar />

          <main className="flex-1 pt-16">
            {children}
          </main>

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#1E293B",
                color: "#F8FAFC",
              },
            }}
          />

          <Footer />

        </PageLoader>

      </body>

    </html>

  )
}