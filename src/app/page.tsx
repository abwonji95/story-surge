import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import './globals.css'
import { Metadata } from 'next'
 import Carousel from './components/carousel/page'
import Scroll from './components/scroll/page'

export const metadata:Metadata ={
  title:{
    absolute:"",
    default:"Story Surge",
    template:"%s - Story Surge | Your Reading Companion.",
  },
  description: 'Explore. Engage. Evolve.',
}


export default function Home() {
  return (
    <aside className="w-full flex flex-col min-h-screen">
      <div className="flex  items-right  gap-5 p-4 sticky top-0 bg-black w-full mb-5 opacity-90">
        <div className="flex  items-right  ">
          <Link href="/" className="text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-800">For You</Link>
          <Link href="/my-deals" className="text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Deals</Link>
          <Link href="/my-sets" className="text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-800">My sets</Link>

        </div>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
        <h1>carousel</h1>
        <Carousel/>
      </div>
   
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
       
        <Scroll title="New Releases" url="/new-release"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
        
        <Scroll title="Deals" url="/deals"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
        
        <Scroll title="Award winning" url="/award-winning"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
        
        <Scroll title="Must Haves" url="/must-haves"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
        
        <Scroll title="Comedy" url="/comedy"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
      
        <Scroll title="Trending" url="/trending"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
       
        <Scroll title="Popular" url="/popular"/>
      </div>
      <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
        <Scroll title="Genres" url="/genres"/>
      </div>
    </aside>
  )
}
