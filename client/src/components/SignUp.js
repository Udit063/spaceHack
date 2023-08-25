import React, { useState } from 'react'
import "./signUp.css"
import axios from "axios"
// import { useNavigate } from "react-router-dom"

const SignUp = () => {

  // const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    organization: "",
    email: "",
    password: ""
  })

  const {name, organization, email, password} = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSignUp = async (e)=>{
    e.preventDefault();
    try{
      const data = await axios.post("http://localhost:8000/auth/signup",
      {
        ...inputValue,
      },
      { withCredentials: true }
      );

      // navigate("/home") -- use this to transfer user to home page after signup
      setInputValue({
        name: "",
        organization: "",
        email: "",
        password: ""
      })

      console.log(data);

    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className='signUp'>
      <div className="head">Sign Up</div>
      <form>
      <input type="text" name="name" value={name} onChange={handleOnChange} placeholder='Enter Name' />
      <input type='text' name="organization" value={organization} onChange={handleOnChange} placeholder='Enter your organization Name' />
      <input type='text' name="email" value={email} onChange={handleOnChange} placeholder='Enter your email' />
      <input type='password' name="password" value={password} onChange={handleOnChange} placeholder='Enter your Password' />
      <button onClick={(e)=>handleSignUp(e)}>Sign Up</button>
      </form>
      
    </div>
  )
}

export default SignUp