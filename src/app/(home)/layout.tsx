"use client"
import { Metadata } from "next"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

  const navLinks=[
    {name:"For You ",href:"/"},
    {name:"My Deals",href:"/my-deals"},
    {name:"My Sets ",href:"/my-sets"},

]

  
export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) { 
    const pathname=usePathname();
    return (
        <aside className="w-full flex flex-col min-h-screen">
        <div className="flex  items-right  gap-5 p-4 sticky top-0 bg-black w-full mb-5 opacity-90">
          
          {navLinks.map((link) =>{
             const isActive= pathname.endsWith(link.href);
            return(
            
                <Link href={link.href} key={link.name} className={isActive? "text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-gray-700 dark:focus:ring-gray-800": "text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:hover:bg-gray-700 dark:focus:ring-gray-800"}>{link.name}</Link>
             
            )
        })}

        </div>
        <div className="w-full">
            {children}
        </div>
        </aside>
    )}