'use client'


  function submitCode() {
    return(
      console.log("file submited")
      )
  }
  
export default function Redeem(){
  
    return (
    <div className="flex min-h-screen flex-col w-ful items-center justify-between bg-gray-300 p-5 m-5 rounded">
      <div className="rounded w-ful flex-col hover:bg-gray-500 p-5 gap-5 items-center">
        <p className="text-black font-medium p-5 text-center ">Got a digital code?
Redeem it now!
Movies Anywhere lets you seamlessly store your favorite movies in one place so you can watch them when and where you want. Learn more
Before clicking on the REDEEM button, please see the terms and conditions below</p>



        <input type="text" placeholder="Enter Code..." id="redeem" className="text-black text-center w-auto h-auto bg-transparent border-solid focus:ring-4 border-black me-2 mb-2" />

        <button type="submit" onClick={submitCode} id="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enter</button>
        
        
      </div>
    </div>
    )}

