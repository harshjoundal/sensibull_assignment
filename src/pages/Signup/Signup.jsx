import React from 'react'
import { Link } from 'react-router-dom'
import styles from './signup.module.css'
import { IoMdArrowRoundBack } from 'react-icons/io';



const Signup = () => {
  return (
    <div className={styles.container}>
    <Link to={'/'} className={styles.back}><IoMdArrowRoundBack/>Home</Link>

        <h1>Sign up</h1>
        <form className={styles.login}>
            <div>
                <label>Username</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" />
            </div>
            <div>
                <label>Password</label>
                <input type="Password" />
            </div>
            <button>Create account</button>
            <p><Link to={'/login'}>login</Link></p>

        </form>
    </div>
  )
}

export default Signup