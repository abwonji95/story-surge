import React from "react";

export default function MyDeals(){
    return (
        <div className="flex flex-col m-5">
            <div className="banner">
                <h1>Holiday Deals</h1>
            </div>
            <div className="daily-deals">
                <h1>Daily Deals</h1>
            </div>
            <div className="under-5-deals">
                <h1>Under 5 Deals</h1>
            </div>
            <div className="under-10-deals">
                <h1>Under 10 Deals</h1>
            </div>
            <div className="all-deals">
                <h1>All  Deals</h1>
            </div>
        </div>
    )
}