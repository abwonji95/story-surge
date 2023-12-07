import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Story Surge ',
  description: 'Explore. Engage. Evolve.',
}

export default function HelpCenterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        {children}
      
      </body>
    </html>
  )
}
