'use client'

import "./style.css"
  function submitCode() {
    return(
      console.log("file submitted")
      )
  }
  
export default function Redeem(){
  
    return (
    <div className="flex flex-col w-ful items-center justify-between bg-gray-300 p-5 m-5 rounded">

<div className="px-24">
        <h1 className="text-black font-bold text-4xl p-5 text-center justify-center text-clip items-center">Got a digital code? </h1>
        <p className="text-black font-normal  text-lg p-5 text-center justify-center text-clip items-center">
              Redeem it now!
            At Story Surge, You can seamlessly store your favorite movies in one place so you can watch them when and where you want. Learn more
            Before clicking on the REDEEM button, please see the terms and conditions below.
            
            </p>
        
            </div>    
        <div className="p-10">
        <form className="form">
            <div className="flex-column">
              <label>Code </label>
              </div>
              <div className="inputForm">
         
                <input type="text" id="email" className="input" placeholder="Enter your Code"/>
              </div>
           
            <button className="button-submit">Submit</button>
           
        
            </form>
            </div>
    </div>
    )}

