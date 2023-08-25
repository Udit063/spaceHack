import React from 'react'
import "./signUp.css"

const SignUp = () => {
  return (
    <div className='signUp'>
      <div className="head">Sign Up</div>
      <form>
        <input type="text" placeholder='Enter Name'/>
        <input type='text' name="organization" placeholder='Enter your organization Name' />
        <input type='text' name="email" placeholder='Enter your email' />
        <input type='password' name="password" placeholder='Enter your Password' />
        <button>Sign Up</button>
      </form>
      
    </div>
  )
}

export default SignUp