import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
import email_icon from '../../components/assets/email.png'
import password_icon from '../../components/assets/password.png'

export default function Login() {

    const [credentials,setcredentials] = useState({email:"",password:""})
    
    let navigate = useNavigate()

    const handlesubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/loginuser",{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({ 
                email:credentials.email, 
                password:credentials.password
            })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success){
            alert("Enter valid credentials")
        }

        if (json.success){
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"))
            navigate("/");
        }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <div className='container'>
        <form onSubmit={handlesubmit}>
            <div className='header1'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='email id' name='email' value={credentials.email} onChange={onChange}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='password'name='password' value={credentials.password} onChange={onChange}/>
                </div>
            </div>
            <div className='submit-container'>
                <button type='submit' className='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}
