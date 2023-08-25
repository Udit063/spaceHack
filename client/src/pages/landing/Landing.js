import React, { useState } from 'react'
import "./landing.css"
import SignUp from "../../components/SignUp";
import Login from "../../components/Login";

const Landing = () => {

    const [alreadySigned , setAlreadySigned] = useState(false); 

    const handleSign = ()=>{
        setAlreadySigned(!alreadySigned);
    }
    
  return (
    <div className='landing'>
        
        <div className="heroSection">
            <div className="leftArea">
                <div className="logo">
                    Space <span>Hack</span>
                </div>
                <div className="image">
                    <img src="./spaceImage.jpg" alt="" />
                </div>
            </div>
            <div className="rightArea">
                {alreadySigned ? <Login/> : <SignUp/>}
                or
                <button onClick={()=>{handleSign()}}>{alreadySigned ? "First Time Here, Sign Up" : "already a user, Login"}</button>
            </div>
        </div>
        
    </div>
  )
}

export default Landing