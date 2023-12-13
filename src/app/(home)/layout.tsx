import { Metadata } from "next"
import React from "react"
import Link from "next/link"

export const metadata:Metadata ={
    title:{
      absolute:"",
      default:"Story Surge",
      template:"%s - Story Surge | Your Reading Companion.",
    },
    description: 'Explore. Engage. Evolve.',
  }

  
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) { 
    return (
        <aside className="flex flex-col min-h-screen">
        <div className="topbar flex  items-right  gap-5 p-4">
          <Link href="/" className="text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-800">For You</Link>
          <Link href="/my-deals" className="text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Deals</Link>
          <Link href="/my-sets" className="text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-800">My sets</Link>

        </div>
        <div>
            {children}
        </div>
        </aside>
    )}