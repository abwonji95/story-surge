import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })



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
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
        <span className="text-sm font-semibold leading-6 text-gray-90">Story Surge</span>
      </Link>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">

      <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
      <Link href="/redeem" className="text-sm font-semibold leading-6 text-gray-900">Redeem</Link>
      <Link href="/books" className="text-sm font-semibold leading-6 text-gray-900">Books</Link>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <Link href="/login" className="mr-6 text-sm font-semibold leading-6 text-gray-900">Log in</Link>
      <Link href="/signup" className="mr-6 text-sm font-semibold leading-6 text-gray-900">Sign Up</Link>
    </div>
  </nav>
  {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
  <div className="lg:hidden flex flex-col" role="dialog" aria-modal="true">
    {/* <!-- Background backdrop, show/hide based on slide-over state. -->*/}
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
          <span className="sr-only">Story Surge</span>
        {/*}  <Image className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/> */}
        </Link>
        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Close menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root flex-col">
        <div className="-my-6 divide-y divide-gray-500/10">
            <div className=" flex py-2 flex-col  gap-5">
              <Link href="/" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</Link>
              <Link href="/redeem" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Redeem</Link>
              <Link href="/movies" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Movies</Link>
            </div>
          <div className="py-6">
            <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</Link>
            <Link href="/signup" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

        
        
        {children}
        
<footer className="bg-white">
<div className='mx-auto row-auto text-center mr-4 max-w-7xl space-y-2 block justify-center p-6 lg:px-8'>
<div className='text-sm row-auto font-semibold leading-6 text-gray-900'>
<Link href="/" className='mx-4'>Home</Link>
<Link href="/redeem" className='mx-4'>Redeem</Link>
<Link href="/my-books" className='mx-4'>My Books</Link>
</div>

<div className='text-sm row-auto font-semibold leading-6 text-gray-900'>
<Link href="/help-center" className='mx-4'>Help Center</Link>
<Link href="/legal-notices" className='mx-4'>Legal notices</Link>
<Link href="/privacy-policy" className='mx-4'>Privacy Policy</Link>
<Link href="/terms-conditions" className='mx-4'>Terms and Conditions</Link>
<Link href="/activate-device" className='mx-4'>Activate Your device</Link>
</div>
<div className='text-sm row-auto font-semibold leading-6 text-gray-900'>
<Link href="/ads" className='mx-4'>Interest Based Ads</Link>
<Link href="/personal-info" className='mx-4'>Do Not Sell My Personal Information</Link>
<Link href="/privacy-policy" className='mx-4'>Closed Captioning Inquiries</Link>
<p className='mx-4 text-stone-600'>©2024 Story Surge. All Rights Reserved.</p>

</div>
</div>

</footer>
        </body>
    </html>
  )
}
