import React from "react"
import './Loginpage.css'
import {useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"

import { emailvalidator,passwordvalidator } from "../Components/Regexvalidator"



const Loginpage = () => {

    const navigate=useNavigate();

    const[input,setInput]=useState({email:'',password:''});

    const[errormsg,setErrormsg]=useState('');

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(localStorage.getItem('auth'))
          navigate('/continue');
    },)

    const onClickEvent=(e)=>{
      e.preventDefault();
      console.log(input)
      if(!emailvalidator(input.email))
        return setErrormsg('enter a valid email id')
      else if(!passwordvalidator(input.password))
        return setErrormsg('enter a valid password')
      localStorage.setItem('auth',true);
      navigate('/continue') 
    }

  
  return (
    
    <div className="container">
      <h1 className="ltext">Sign in to app</h1>
      <button className="loginbutton">Sign in with Google</button>
      <button className="loginbutton">Sign in with Apple</button>
      <hr></hr>
      <p className="sutext">Sign in using email below</p>
      {setErrormsg.length>0 &&(<div style={{backgroundColor:'black',color:'red',paddingLeft:'27%'}}>{errormsg}</div>)}<br/>
      <input className="emailinput" placeholder="Enter email" name="email" onChange={handleChange}/>
      <input className="emailinput" placeholder="Enter password" type="password" name="password" onChange={handleChange}/><br/><br/>
      <u>forgot your password?</u><br/><br/>
      <button className="finalbutton1" onClick={onClickEvent}>continue</button>
      <button className="finalbutton1" onClick={()=>navigate('/signup')}>Sign up</button>
    </div>
    
  )
}

export default Loginpage



/*<div className="bodyy">
        <div className='box'>
            <h1 className='log'>Login</h1><br/>
            <div><label className='label'>Email:</label>
            {setErrormsg.length>0 &&(<div style={{marginBottom:'10px',color:'red'}}>{errormsg}</div>)}
            <input type='text' name="email" onChange={handleChange}/><br/><br/></div>
            <div><label className='='label>Password:</label>
            <input type='password' name="password" onChange={handleChange}/><br/><br/></div>
        <div className="submitbox">
            <button className='buttoon' onClick={onClickEvent}>Continue</button>
            <button className='buttoon' onClick={()=>navigate('signup')}>Signup</button>
        </div>
        </div>
    </div>*/
