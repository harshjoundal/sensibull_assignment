import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'

const Home = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
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
    getdata();
  },[])
  // console.log(data)
  
  if(loading){
    return(
      <div>Loading...</div>
    )
  }
  return (

    <div>
      
    </div>
  )
}

export default Home