import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NewProducts() {

    const NewProducts = [
        {
            image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
            prdctName:"Foley Catheter",
            price:"$12.90",
            prdct_id:"1st prdct"
        },
        {
            image:"https://img.lovepik.com/free-png/20211216/lovepik-hand-drawn-thermometer-png-image_401695408_wh1200.png",
            prdctName:"Thermometer",
            price:"$8.90",
            prdct_id:"2nd prdct"
        },
        {
            image:"https://www.oxyaider.co.za/wp-content/uploads/2021/11/Made-of-medical-grade-PVC-.-1.png",
            prdctName:"Mask",
            price:"$12.90",
            prdct_id:"3rd prdct"
        },
        {
            image:"https://static.vecteezy.com/system/resources/previews/024/286/063/non_2x/wound-dressing-plaster-free-png.png",
            prdctName:"Wound Dressing",
            price:"$24.90",
            prdct_id:"4th prdct"
        }
    ]

    const [data,setData] = useState([])

    const [productLimit,setProductLimit] = useState(4)


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
    <div className="p-5 mx-16 mt-5">
        <h1 className='text-2xl sm:text-4xl font-semibold'>New Products</h1>
    </div>
    <div className="text-right mr-10">
        <Link to={'/new-products'}><button className='text-pink-900 sm:text-xl font-mono'>View All <i class="fa-solid fa-arrow-right"></i></button></Link>
    </div>
    
    {/* New Products start */}
    
    <div className="flex flex-wrap justify-center">
            {
                data.map((item,index)=>{
                    return(
                        <>
                        
                        {index < productLimit &&
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
                            <div className="">
                                <button className='bg-pink-900 text-white text-xs sm:text-base rounded w-full py-2'>Add to Cart <i class="fa-solid fa-bag-shopping"></i></button>
                            </div>
                        </Card>
                }
                        </>
                    )
                })
            }
            
        </div>

    {/* New Products end */}
    </>
  )
}

export default NewProducts
