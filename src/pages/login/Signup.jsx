import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'
import user_icon from '../../components/assets/person.png'
import email_icon from '../../components/assets/email.png'
import password_icon from '../../components/assets/password.png'
import location_icon from '../../components/assets/location.png'

export default function Signup() {

    const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

    let navigate = useNavigate()

    const handlesubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/createuser",{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name, 
                email:credentials.email, 
                password:credentials.password, 
                location:credentials.geolocation
            })
        });
        const json = await response.json()
        console.log(json);

        if (!json.success){
            alert("Enter valid credentials")
        }

        if (json.success){
            navigate ("/login");
        }
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <div className='container'>
        <form onSubmit={handlesubmit}>
            <div className='header1'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Name' name='name' value={credentials.name} onChange={onChange}/>
                </div>
                <div className='input'>
                    <img src={email_icon} alt=''/>
                    <input type='email' placeholder='email id' name='email' value={credentials.email} onChange={onChange}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=''/>
                    <input type='password' placeholder='password'name='password' value={credentials.password} onChange={onChange}/>
                </div>
                <div className='input'>
                    <img src={location_icon} alt=''/>
                    <input type='text' placeholder='address' name='geolocation' value={credentials.geolocation} onChange={onChange}/>
                </div>
            </div>
            <div className='submit-container'>
                <button type='submit' className='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
