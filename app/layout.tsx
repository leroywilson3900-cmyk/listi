import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LISTI — CrossPost to Every Platform',
  description: 'List once, sell everywhere. CrossPost to eBay, Poshmark, and Mercari in seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
