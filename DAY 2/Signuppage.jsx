import React from 'react'
import './Signuppage.css'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { emailvalidator,passwordvalidator,usernamevalidator} from '../Components/Regexvalidator';

const Signuppage = () => {

    const navigate2=useNavigate();
    
    const[inputt,setInputt]=useState({username:'',email:'',password:''})

    const[errmsg,setErrmsg]=useState('')

    const changeHandlerr=(e)=>{
        setInputt({...inputt,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
      if(localStorage.getItem('auth'))
        navigate2('/continue');
  },)

    const onClickeventt=(e)=>{
      e.preventDefault();
      if(!emailvalidator(inputt.email)){
        setErrmsg("enter a valid email id")
      }
      else if(!usernamevalidator(inputt.username)){
        setErrmsg("enter a valid username")
      }
      else if(!passwordvalidator(inputt.password)){
        setErrmsg("Password must have 8 letters");
      }
      else{
        localStorage.setItem("auth",true);
        navigate2('/continue');
      }
    }

  return (
    <div className='container'>
      <h1 className='ltext'>Create a new account</h1><br></br><br></br>
      {errmsg.length>0 &&(<div style={{paddingLeft:'27%',color:'red',backgroundColor:'black'}}>{errmsg}</div>)}
      <input type='email' placeholder='Enter email' name='email' onChange={changeHandlerr}/>
      <input type='text' placeholder='Enter username' name='username' onChange={changeHandlerr}/>
      <input type='password' placeholder='Enter password' name='password' onChange={changeHandlerr}/>
      <hr></hr>
      <button className='loginbutton' onClick={onClickeventt}>Sign Up</button>
      <button className='loginbutton' onClick={()=>navigate2('/login')}>Sign In</button>
    </div>
  )
}

export default Signuppage




/*<div className='bodyy'>
        <div className='box'>
            <h1 className='log'>SignUp</h1><br/>
            {errmsg.length>0 &&(<div style={{marginBottom:'10px',color:'red'}}>{errmsg}</div>)}
            <div><label className='label'>Email:</label>
            <input type='email' name="email" onChange={changeHandlerr}/><br/><br/></div>
            <div><label className='label'>Username:</label>
            <input type='text'name="username" onChange={changeHandlerr}/><br/><br/></div>
            <div><label className='='label>Password:</label>
            <input type='password' name="password" onChange={changeHandlerr}/><br/><br/></div>
        <div className="submitbox">
            
            <button className='buttoon' onClick={onClickeventt}>Continue</button>
        </div>
        </div>
    </div>*/