import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
import styles from './home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false);

  const getdata= async()=>{
    setLoading(true)
    let res =fetch('https://prototype.sbulltech.com/api/v2/instruments')
    .then((res)=>res.text())
    .then((res)=>{
      Papa.parse(res,{
        delimiter:',',
        header:true,
        complete:(result)=>{
          setData(result.data)
        }
      });
      setLoading(false);
    })
    .catch(err=>console.log(err))     
  }
  
  useEffect(()=>{
    getdata();
  },[])
  // console.log(data)

  const handleSearch=(query)=>{
    if(!query){
      getdata();
      return;
    }

    query = query.toLowerCase()
    const result =[];

    data.forEach((ele)=>{
      let symbol = ele.Symbol.toLowerCase();
      let name='';
      if(ele.Name){
        name = ele.Name;
        name = name.split(' ').join('').toLowerCase()
      }

      console.log(name);
      if(symbol.includes(query) || name.includes(query)){
        result.push(ele);
      }
    })

    setData(result);
    // console.log(result)

  }

  return (
    <div className={styles.container}>
      <div className={styles.searchDiv}>
        <input type="text" placeholder='Search' onKeyUp={(e)=>handleSearch(e.target.value)}/>
        {/* <button>search</button> */}
      </div>

      {loading && <span><h1>Loading....</h1></span>}

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((ele)=>(
              <tr>
                <td><Link to={`/quotes/${ele.Symbol}`}>{ele.Symbol}</Link></td>
                <td>{ele.Name}</td>
                <td>{ele.Sector?ele.Sector:"N/A"}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home