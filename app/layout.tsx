import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const font = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className} text-base`}>{children}</body>
    </html>
  )
}
