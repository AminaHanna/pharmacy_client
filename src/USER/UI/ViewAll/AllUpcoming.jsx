import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllUpcoming() {

    const [data,setData] = useState([])


    useEffect(()=>{
      fetchdata()
    },[])


    const fetchdata = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/products")
            setData(response.data.products);
        } catch (error) {
            
        }
    }

  return (
    <>
    <div className="flex flex-wrap justify-center">
            {
                data.map((item)=>{
                    return(
                        <>
                        <Card className='border w-[130px] sm:w-[250px] sm:h-[350px] m-5 flex flex-col justify-between'>
                            {/* <Link to={`/products/${item._id}`} state={item} > */}
                                <div className="h-[130px] sm:h-[230px]">
                                    <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                                </div>
                                <div className="border-t-2 p-2 flex flex-col items-center">
                                    <p className='text-xs sm:text-xl font-bold'>{item.name}</p>
                                </div>
                            {/* </Link> */}
                            <div className="bg-slate-300 text-end">
                                <p className='hover:text-2xl hover:text-pink-900 px-5 text-white text-xs sm:text-lg rounded w-full py-2'><i class="fa-solid fa-heart"></i></p>
                            </div>
                        </Card>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default AllUpcoming;
