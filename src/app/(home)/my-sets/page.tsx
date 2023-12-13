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
        <div className="w-full flex  p-5 rounded m-5">
            <div className="w-full flex flex-col">
            <div className="p-4 text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 gap-6">
            <h2 className="text-white p-4">Introducing</h2>
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">My Sets</h5>
                
                <p><span>A new way to view — and grow — your collection.</span></p>
                <Link href="/learn-more" className="bg-transparent mt-5 rounded flex-row bg-white"> <span>Learn More <GoChevronRight /> </span></Link>

            <div className="flex flex-col b text-dark float-right">
                    <div className="float-right">

                        <h1 className="text-black-400"> image goes here</h1>
                </div>

            </div>

            </div>
            
            <div className="flex flex-row gap-6 p-6 text-center items-center">
                <p><span> O sets  Discovered</span></p>
                <p><span> O sets  Completed</span></p>
            </div>


            <div className="flex flex-col bg-gray-400 hover:bg-gray-500 rounded p-5">
                <h1 className="text-white"> My sets</h1>
            </div>


            </div>

            
        </div>
    )
}