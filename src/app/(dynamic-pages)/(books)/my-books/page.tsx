import Link from "next/link"

export const metadata = {
    title: 'My Books',
    
  }

export default function MyBooks(){
    return (
      <div className="flex flex-col w-ful items-center justify-between bg-gray-300 p-5 m-5 rounded">

      <div className="">
            <h1 className=" text-center font-bold text-4xl p-5"> Welcome</h1>
            <p className=" text-center font-medium text-xl p-5" >Login To Get Started</p>
            <Link className=" bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800 " href="/login" ><span className="text-white text-center m-2">Login</span></Link>

          </div>
          <div className="show-content">

            {/**
             * content to be displayed  after login
             */}
          </div>

    </div>
    )}