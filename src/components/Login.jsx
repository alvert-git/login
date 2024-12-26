import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login1 from '../assets/img1.png'

const Login = () => {

 const [show,setShow]=useState(true)

 const toggleShow = ()=>{
  setShow(!show)
  console.log(show);
  
 }
 
    const [credential , setCredential]=useState({
      email:'',
      password:''
    })
  const navigate = useNavigate()
    const handleSubmit=async(e)=>{
      e.preventDefault()
      console.log("Form Submitteds");
      const {email,password}=credential
      const response = await fetch('',{
        method : 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({email , password})
      })
      const json = await response.json()
      console.log("This is response data", json);
      if(json.success){
        localStorage.setItem('token',json.authToken)
        navigate('/')
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
      <div className='container py-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img className='login-img w-100' src={Login1} alt='login image' />
                </div>
                <div className='col-md-6'>
                    <form onSubmit={handleSubmit} className='py-5'>
                       
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <i className="fa-regular fa-envelope email-icon"></i>
                            <input type="email" name='email' value={credential.email} onChange={handleChange} className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type={show?  "text" : "password" } name='password' value={credential.password} onChange={handleChange} className="form-control text-center" id="exampleInputPassword1" />
                            <i onClick={()=>{ toggleShow()
                            }} className={show? "fa-solid fa-eye password-see-icon" : "fa-solid fa-eye-slash password-notsee-icon"} ></i>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link className="nav-link" to='/signup'>Dont have accout? signup</Link>
                    </form>
                </div>
            </div>
        </div>
</form>
    </div>
  )
}

export default Login