

import { useNavigate } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = ()=>{
    const navigate = useNavigate();
    return(
        <div className={styles.container}>
            <div className={styles.logo} onClick={(e)=>{navigate('/')}}>
                <img src="https://user-images.githubusercontent.com/72031522/201916263-96a3ee13-3cd0-4ca9-a8ca-b0edbb67cb70.JPG" alt="logo" />
            </div>
            <button className={styles.login} onClick={(e)=>{navigate('/login')}}>Login</button>
        </div>
    )
}

export default Navbar