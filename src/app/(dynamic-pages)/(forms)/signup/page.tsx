import "./style.css"
import { DiApple } from "react-icons/di";
import { FaGoogle } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export const metadata = {
    title: 'Signup',
    
  }

export default function Signup(){
    return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 justify-between p-10">
<div className="login">



<form className="form">
<div className="flex-row">
  <div className="flex-col ">
  <div className="flex-column">
        <label>First Name </label></div>

      <div className="inputForm">
        
        
 
        <input type="text" id="email" className="input" placeholder="Enter your First Name"/>
      </div>
      </div>
      <div className="flex-col">
      <div className="flex-column">
      <label>Last Name</label></div>
      <div className="inputForm">
        
 
        <input type="text" id="email" className="input" placeholder="Enter your Last Name"/>
      </div>
      </div>
</div>


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
      <div className="flex-column">
      <label>Confirm Password </label></div>
      <div className="inputForm">
        <CiLock/>

        <input type="password" className="input" placeholder="Confirm your Password"/>

  <FaEye/>
      </div>
    
    
    <div className="flex-row">
      {/**
       * 
       * Show errors
       */}
    </div>
    <button className="button-submit">Sign Up</button>
    <p className="p">Already have an account? 
    <Link href="/login" className=""> <span className="span">Login</span></Link>

    </p><p className="p line">Or With</p>

    <div className="flex-row">
      <button className="btn google">
        <FaGoogle/>
   
        Google 
        
      </button><button className="btn apple">
        <DiApple/>

        Apple 
        
</button>
</div>

</form>


</div>
    </div>
    )}