import React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "ZHEYUE ZHANG",
  description: "Illustrator & PictureBook Artist",
}

icons: {
    icon: "/image/logo.jpg", 
},

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <SiteNav />
        {/* pt-16 offsets the fixed navbar height */}
        <main className="min-h-screen pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
