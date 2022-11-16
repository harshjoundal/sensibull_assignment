import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './signup.module.css'
import { IoMdArrowRoundBack } from 'react-icons/io';



const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate()
  const handleSignup= async()=>{
    let data = {
        username: nameRef.current.value,
        email: emailRef.current.value,
        password: passRef.current.value,
    }

    let res = fetch('https://customloginapi.vercel.app/users/signup',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data),
        mode:"cors"
    })
    .then((res)=>res.json())
    .then((res)=>{
        alert('Account created successfully!')
        navigate('/login')
        
    })
  }
  
  
    return (
    <div className={styles.container}>
    <Link to={'/'} className={styles.back}><IoMdArrowRoundBack/>Home</Link>

        <h1>Sign up</h1>
        <form className={styles.login} onSubmit={(e)=>{
            e.preventDefault();
            handleSignup()
        }}>
            <div>
                <label>Username</label>
                <input type="text" ref={nameRef} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" ref={emailRef} />
            </div>
            <div>
                <label>Password</label>
                <input type="Password" ref={passRef}/>
            </div>
            <button type='submit'>Create account</button>
            <p><Link to={'/login'}>login</Link></p>

        </form>
    </div>
  )
}

export default Signup