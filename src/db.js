import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import Product from './Product'



const Db = () => {

  const [data, setData]=useState();
    useEffect(() => {
      const  settingData = async () => {
  
        const res =await axios.get("https://picsum.photos/v2/list?page=0&limit=10")
        setData(res.data)
      }
      settingData()
    }, [setData])
    
console.log(data)
  return (
    <div>
     {
       data?.map((item ,i)=>{
        console.log(item.height,"author")
        return (<Product key={i} author={item.author} height={item.height} url={item.url}/>)
       })
     }
    </div>
  )
}

export default Db