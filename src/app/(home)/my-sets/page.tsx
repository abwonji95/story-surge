import Link from "next/link";
import React from "react";

export default function MySets(){
    return (
        <div className="flex bg-gray-400 hover:bg-gray-500 p-5 rounded m-5">

            <div className="flex flex-col rounded p-5">
                <h1 className="text-gray bg-gray-400 ">Introducing</h1>
                <h2 className="text-white">My sets</h2>
                <p><span>A new way to view — and grow — your collection.</span></p>
                <Link href="/learn-more">Learn More</Link>



            </div>
            <div className="flex flex-col bg-white">

            </div>
            
        </div>
    )
}