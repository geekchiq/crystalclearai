import './globals.css'

import { Dancing_Script } from 'next/font/google'
import type { Metadata } from 'next'

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Hexa',
  description: 'The Mystery Unfolds'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dancing.className} ${dancing.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
