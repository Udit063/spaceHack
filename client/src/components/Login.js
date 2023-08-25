import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <div className='login'>
      <div className="head">Log In</div>
      <form>
        <input type='text' name="organization" placeholder='Enter your organization Name' />
        <input type='text' name="email" placeholder='Enter your email' />
        <input type='password' name="password" placeholder='Enter your Password' />
        <button>Login</button>
      </form>
      
    </div>  )
}

export default Login