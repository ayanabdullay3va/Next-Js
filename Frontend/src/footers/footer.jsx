import axios from 'axios'
import React,{useEffect,useState} from 'react'

function Footer() {
  const [data,setData]=useState("")
  useEffect(()=>{
    axios("http://localhost:3003/product").then((res)=>{
      console.log(res.data)
    })
    },[])
  return (
    <div>
        <div className='datadiv'>
            <div>
              {data&&data.localeCompare((elem,i)=>{
  <li key={i}>{elem.name}</li>,
  <li key={i}>{elem.price}</li>
              })}
              <ul>
              
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer