import { Card } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ContextAPI } from '../Context/Context'
import { successToast } from '../../../ExternalComponents/Toast/Toast'


function TopProducts() {
    const [data,setData] = useState([])
    const [productLimit,setProductLimit] = useState(4)
    const {refresh,setRefresh} = React.useContext(ContextAPI);



    useEffect(()=>{
      fetchdata()
    },[])


    const fetchdata = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/products")
            setData(response.data.products);
        } catch (error) {
            
        }
    };

    const addToCart = async (id) => {
        try {
          const response = await axios.post('http://localhost:3000/api/cart/addToCart',  {productId:id,userId:JSON.parse(localStorage.getItem("users"))?._id} );
          console.log(response);
          setRefresh(!refresh)
          successToast("Succesfully Added into Cart")
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <>
        <div className="p-5 mx-16 mt-5">
            <h1 className='text-2xl sm:text-4xl font-semibold'>Top Products</h1>
        </div>
        <div className="text-right mr-10">
            <Link to={'/top-products'}><button className='text-pink-900 sm:text-xl font-mono'>View All <i class="fa-solid fa-arrow-right"></i></button></Link>
        </div>
    
    {/* Top Products start */}
    
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
                                <button type='button' 
                                    onClick={()=>{
                                        addToCart(item._id)
                                    }} 
                                className='bg-pink-900 text-white text-xs sm:text-base rounded w-full py-2'>Add to Cart <i class="fa-solid fa-bag-shopping"></i></button>
                            </div>
                        </Card>
                        }
                        </>
                    )
                })
            }
            
        </div>

    {/* Top Products end */}
    </>
  )
}

export default TopProducts
