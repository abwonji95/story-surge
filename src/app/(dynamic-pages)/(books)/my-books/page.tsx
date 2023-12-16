import Link from "next/link"

export const metadata = {
    title: 'My Books',
    
  }

export default function MyBooks(){
    return (
        <div className="min-h-screen flex-row block items-center justify-between p-24">
          <div className="bg-gray-700 flex flex-col items-center rounded w-full m-5 p-5 h-96">
            <h1 className="text-white text-center font-bold text-xl p-5"> Welcome</h1>
            <p className=" text-white text-center font-medium text-lg p-5" >Login To Get Started</p>
            <Link className="bg-blue-600 mt-10 h-10  border-2 rounded-full w-fit  text-sm text-center  flex justify-center align-middle align gap-3 cursor-pointer " href="/login" ><span className="text-white text-center m-2">Login</span></Link>

          </div>

    </div>
    )}