import React, { useEffect } from 'react'
import styles from './../pages/Quotes/quotes.module.css'

const Card = ({getdata,price,time,validTill}) => {
    
    useEffect(()=>{
      let Exdate = new Date(validTill).getTime();
      let Currentdate = new Date().getTime();
      let diff = Exdate - Currentdate;

      if(diff<0){
        diff = 0;
      }

      setTimeout(()=>{
        getdata();
        console.log("Refreshed");
      },diff)
    },[])
  
    return (
    <div className={styles.card}>
        <p>Price: {price.toFixed(2)}</p>
        <p>Time: {time} ({new Date(time).toDateString()})</p>
        <p>Valid till: {validTill}</p>
    </div>
  )
}

export default Card