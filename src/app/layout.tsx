import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

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
  <div className="lg:hidden" role="dialog" aria-modal="true">
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
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 block py-6">
            <div className="-mx-3">
              <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                Product
               {/* <!--
                  Expand/collapse icon, toggle classNamees based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->*/}
                <svg className="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              
            </div>
            <div className="py-2 block">
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
      <Link href="/redeem" className="text-sm font-semibold leading-6 text-gray-900">Redeem</Link>
      <Link href="/movies" className="text-sm font-semibold leading-6 text-gray-900">Movies</Link>
      </div>
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
<div className='mx-auto row-auto max-w-7xl space-y-2 block justify-center p-6 lg:px-8'>
<div className='text-sm row-auto font-semibold leading-6 text-gray-900'>
<Link href="/">Home</Link>
<Link href="/redeem">Redeem</Link>
<Link href="/my-books">My Books</Link>
</div>

<div className='text-sm row-auto font-semibold leading-6 text-gray-900'>
<Link href="/help-center">Help Center</Link>
<Link href="/legal-notices">Legal notices</Link>
<Link href="/privacy-policy">Privacy Policy</Link>
<Link href="/terms-conditions">Terms and Conditions</Link>
<Link href="/activate-device">Activate Your device</Link>
</div>
<div className='text-sm row-auto font-semibold leading-6 text-gray-900'>
<Link href="/ads">Interest Based Ads</Link>
<Link href="/personal-info">Do Not Sell My Personal Information</Link>
<Link href="/privacy-policy">Closed Captioning Inquiries</Link>
<p>© 2023 Movies Anywhere. All Rights Reserved.</p>

</div>
</div>

</footer>
        </body>
    </html>
  )
}
