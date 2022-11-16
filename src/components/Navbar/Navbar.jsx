

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './navbar.module.css'
import {useDispatch,useSelector} from 'react-redux'

const Navbar = ()=>{
    const navigate = useNavigate();
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    return(
        <div className={styles.container}>
            <div className={styles.logo} onClick={(e)=>{navigate('/')}}>
                <img src="https://user-images.githubusercontent.com/72031522/201916263-96a3ee13-3cd0-4ca9-a8ca-b0edbb67cb70.JPG" alt="logo" />
            </div>

            {state.username?<button className={styles.login} onClick={(e)=>{dispatch({type:'logout'})}}>Logout</button>:<button className={styles.login} onClick={(e)=>{navigate('/login')}}>Login</button>}
            
        </div>
    )
}

export default Navbar