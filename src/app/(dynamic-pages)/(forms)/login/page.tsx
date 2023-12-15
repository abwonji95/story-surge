import "./style.css"
import { DiApple } from "react-icons/di";
import { FaGoogle } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export const metadata = {
    title: 'Login',
    
  }

export default function Login(){
    return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 justify-between p-24">
<div className="login">



<form className="form">
    <div className="flex-column">
      <label>Email </label></div>
      <div className="inputForm">
        <MdOutlineEmail/>
 
        <input type="text" id="email" className="input" placeholder="Enter your Email"/>
      </div>
    
    <div className="flex-column">
      <label>Password </label></div>
      <div className="inputForm">
        <CiLock/>

        <input type="password" className="input" placeholder="Enter your Password"/>

  <FaEye/>
      </div>
    
    <div className="flex-row">
      <div>
      <input type="checkbox"/>
      <label>Remember me </label>
      </div>

      <Link href="/forgot-password" className=""><span className="span">Forgot password?</span></Link>
    </div>
    <button className="button-submit">Sign In</button>
    <p className="p">Don`t have an account? 
    <Link href="/signup" className=""> <span className="span">Sign Up</span></Link>

    </p><p className="p line">Or With</p>

    <div className="flex-row">
      <button className="btn google">
        <FaGoogle/>
   
        Google 
        
      </button><button className="btn apple">
        <DiApple/>

        Apple 
        
</button></div></form>


</div>
    </div>
    )}