import React, { useRef } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import styles from './login.module.css'
import { IoMdArrowRoundBack } from 'react-icons/io';
import {useSelector,useDispatch} from 'react-redux'
// https://customloginapi.vercel.app
//custom login/register api deployed on vercel

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const state = useSelector(state=>state);
  const dispatch = useDispatch()


const handleLogin = async ()=>{
    let data = {
      email : emailRef.current.value,
      password : passwordRef.current.value
    }
    // console.log(data);
    try{
      let res = fetch('https://customloginapi.vercel.app/users/login',{
        method:"POST",
        headers:{
          'Content-type':"application/json"
        },
        body: JSON.stringify(data)
      })
      .then((res)=>{
        if(res.status==400){
          alert('Wrong password or email!');
          return;
        }
        return res.json()
      })
      .then((res)=>{
        dispatch({type:'login',payload:res})
        navigate('/')
      })
      .catch((err)=>{
        console.log(err);
      })

    }catch(err){
      alert('Incorrect password or email!');
      console.log(err);
    }

  }

  // console.log("state:",state);
  
  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.back}><IoMdArrowRoundBack/>Home</Link>
      
        <h1>Login</h1>
        <form className={styles.login} onSubmit={(e)=>{
          e.preventDefault();
          handleLogin()
        }}>
            <div>
                <label>Email</label>
                <input type="text" ref={emailRef} />
            </div>
            <div>
                <label>Password</label>
                <input type="Password" ref={passwordRef}/>
            </div>
            <button type='submit'>Login</button>
        <p>Don't have account? <Link to={'/signup'}>Signup</Link></p>
        </form>
    </div>
  )
}

export default Login