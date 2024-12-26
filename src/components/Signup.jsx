import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {
  const [credential , setCredential]=useState({
    name:'',
    email:'',
    password:''
  })
const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log("Form Submitteds");
    const {name , email,password}=credential
    const response = await fetch('',{
      method : 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name, email , password})
    })
    const json = await response.json()
    console.log("This is response data", json);
    if(json.success){
      localStorage.setItem('token',json.authToken)
      navigate('/login')
    }else{
      alert("Invalid Credentials")
    }
  }
  const handleChange = (e)=>{
    setCredential({...credential , [e.target.name]:e.target.value})
  }
  return (
    <div>
       <form className='container' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" name='name' value={credential.name} onChange={handleChange}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"  name='email' value={credential.email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name='password' value={credential.password} onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button><br/>
  <Link to="/Login">Already have account Login</Link>
</form>
    </div>
  )
}

export default Signup
