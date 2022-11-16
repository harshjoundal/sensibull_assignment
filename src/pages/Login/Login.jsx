import React from 'react'
import { Link } from 'react-router-dom'
import styles from './login.module.css'
import { IoMdArrowRoundBack } from 'react-icons/io';


const Login = () => {
  return (
    <div className={styles.container}>
      <Link to={'/'} className={styles.back}><IoMdArrowRoundBack/>Home</Link>
      
        <h1>Login</h1>
        <form className={styles.login}>
            <div>
                <label>Email</label>
                <input type="text" />
            </div>
            <div>
                <label>Password</label>
                <input type="Password" />
            </div>
            <button>Login</button>
        <p>Don't have account? <Link to={'/signup'}>Signup</Link></p>
        </form>
    </div>
  )
}

export default Login