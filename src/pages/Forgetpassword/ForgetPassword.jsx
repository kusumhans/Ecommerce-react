import { useState } from 'react';
import './ForgetPassword.css';   

export default function ForgetPassword(){
    const [input, setInput] = useState("")
    const [error, setError] = useState(false);

    const SendOtp = ()=>{
       if (input.trim() === "") {
        setError(true)
      } else {
        setError(false);   
        alert("Submitted successfully!");
      }
      setInput("")
    }
    
    return(
        <div>
            <div className="container-div">
                <div className="row-div">
                    <h2 className='password-heading text-center'>Forget your Password ? </h2>
                    <p className='text mb-4'>Enter your register email address and we'll send you OTP request to reset your password.</p>  
               
                    <h6 className='email-text mb-3'>Email(Required)</h6>
                    <input 
                        type="text" 
                        value={input}
                         placeholder="Enter Email/Mobile number"
                        onChange={(e)=> {
                            setInput(e.target.value);
                            setError(false)
                        }}
                          />
                  
                          {error && (
                            <p className='error-heading'>
                              Please fill Email !
                            </p>
                          )}
                                             
                    <p className='term-policy mb-3 mt-5 text-center'>By continuing, you agree to shopCart Terms of Use and Privacy Policy.</p>
                    <button className="request btn btn-primary " onClick={SendOtp}>REQUEST OTP</button>
                    </div>
            </div>
        </div>
    )
}