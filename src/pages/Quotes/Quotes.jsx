import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './quotes.module.css'
import Card from './../../components/Card'

const Quotes = () => {
  const location = useLocation().pathname.split('/')[2];
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([])

  const getData = async()=>{
    setLoading(true)
    let res = fetch(`https://prototype.sbulltech.com/api/v2/quotes/${location}`)
    .then(res=>res.json())
    .then((res)=>{
      setData(res.payload[location]);
      setLoading(false)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  // console.log(data);

  const handleSort=(val)=>{
    let newData = data;
    if(val === "default"){
      getData();
      return;
    }
    else if(val === 'asc'){
      newData = newData.sort((a,b)=>{
        a = Number(a.time.split(' ')[1].split(':').join(''))
        b = Number(b.time.split(' ')[1].split(':').join(''))
        return a-b
      })
      setData([...newData])
    }
    else if(val === 'dec'){
      newData = newData.sort((a,b)=>{
        a = Number(a.time.split(' ')[1].split(':').join(''))
        b = Number(b.time.split(' ')[1].split(':').join(''))
        return b-a
      })
      setData([...newData])
    }
    
    // console.log(newData);
  }
  
  
  return (
    <div className={styles.container}>
      {loading && <span><h2>Loading...</h2></span>}
      <Link to={'/'} className={styles.back}><IoMdArrowRoundBack/>Back</Link>

      <div className={styles.quotesContainer}>

        {/* Sorting */}
        <div className={styles.sortContainer}>
          <label>Sort By Time</label>
          <select onChange={(e)=>handleSort(e.target.value)}>
            <option value="default">Default</option>
            <option value="asc">Ascending</option>
            <option value="dec">Descending</option>
          </select>
        </div>

        {/* cards */}

        <ul className={styles.cardList}>
          {
            data.map((ele)=>(
              <li key={ele.time}>
                <Card getdata={getData} price={ele.price} time={ele.time} validTill={ele.valid_till}/>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Quotes