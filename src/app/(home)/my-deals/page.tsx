import { Metadata } from "next";
import React from "react";


export const metadata:Metadata ={
    title:{
      absolute:"",
      default:"Story Surge",
      template:"My Deals - Story Surge | Your Reading Companion.",
    },
    description: 'Explore. Engage. Evolve.',
  }


export default function MyDeals(){
    return (
        <div className="flex flex-col m-5">
             <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
                <h1>Holiday Deals</h1>
            </div>
            <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
                <h1>Daily Deals</h1>
            </div>
            <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
                <h1>Under 5 Deals</h1>
            </div>
            <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
                <h1>Under 10 Deals</h1>
            </div>
            <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6 m-5">
                <h1>All  Deals</h1>
            </div>
        </div>
    )
}