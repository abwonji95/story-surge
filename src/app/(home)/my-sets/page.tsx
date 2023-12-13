import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { GoChevronRight } from "react-icons/go";


export const metadata:Metadata ={
    title:{
      absolute:"",
      default:"Story Surge",
      template:"My Sets - Story Surge | Your Reading Companion.",
    },
    description: 'Explore. Engage. Evolve.',
  }


export default function MySets(){
    return (
        <main>
<div className="flex flex-col m-5">
        <div className="float-left p-4 text-left bg-white border border-gray-200 rounded-lg  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6">
             <h2 className="text-gray-700 m-5">Introducing</h2>
            <h5 className="text-3xl font-bold text-gray-900 dark:text-white m-5">My Sets</h5>
                
                <p><span className="m-5">A new way to view — and grow — your collection.</span></p>
                <Link href="/learn-more" className="flex group text-blue-400 transition-all duration-300 ease-in-out m-5"> <span className="flex flex-row m-5 bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Learn More <GoChevronRight /></span></Link>

        </div>
        
</div>

           
            <div className="text-center items-center m-5 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6">
         
            <div className=" flex-row gap-6 p-6 text-center items-center">
                <p><span className="flex-col"> O sets  Discovered</span></p>
                <p><span className="flex-col"> O sets  Completed</span></p>
            </div>

            </div>
            
            
            <div className="m-5 flex flex-col bg-gray-400 hover:bg-gray-500 rounded p-5">
                <h1 className="text-white"> My sets</h1>
            </div>

            
        
        </main>
    )
}