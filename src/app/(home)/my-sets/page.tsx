import Link from "next/link";
import React from "react";

export default function MySets(){
    return (
        <div className="flex  p-5 rounded m-5">
            <div className="flex flex-col">
            <div className="flex flex-col w-full bg-gray-400 hover:bg-gray-500 rounded p-5">
                <h1 className="text-gray bg-gray-400 ">Introducing</h1>
                <h2 className="text-white">My sets</h2>
                <p><span>A new way to view — and grow — your collection.</span></p>
                <Link href="/learn-more">Learn More</Link>

                <div className="flex flex-col b text-dark items-right">

                <h1 className="text-black-400"> image goes here</h1>

            </div>

            </div>
            
            <div className="flex flex-row gap-6">
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