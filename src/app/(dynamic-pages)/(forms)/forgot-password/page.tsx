import { MdOutlineEmail } from "react-icons/md";
import "../login/style.css"

export default function ForgotPassword(){
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 justify-between p-24">
        <div className="login">
        
        
        
        <form className="form">
            <div className="flex-column">
              <label>Email </label>
              </div>
              <div className="inputForm">
                <MdOutlineEmail/>
         
                <input type="text" id="email" className="input" placeholder="Enter your Email"/>
              </div>
           
            <button className="button-submit">Submit</button>
           
        
            </form>
        
        
        </div>
    </div>
    )
}