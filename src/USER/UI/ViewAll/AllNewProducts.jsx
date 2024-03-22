import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AllNewProducts() {

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
                            <Link to={`/products/${item._id}`} state={item} >
                                <div className="h-[130px] sm:h-[240px]">
                                    <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                                </div>
                                <div className="border-t-2 p-2">
                                    <p className='text-xs sm:text-xl font-bold'>{item.name}</p>
                                    <p className='text-xs sm:text-base'>{item.price}</p>
                                </div>
                            </Link>
                        </Card>
                        </>
                    )
                })
            }
        </div>
    </>
  )
}

export default AllNewProducts;
