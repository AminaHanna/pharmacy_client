import { Card } from '@mui/material'
import React from 'react'
import { ContextAPI } from '../Context/Context'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function StartShopping() {
    const [data,setData] = useState([])
    const {refresh,setRefresh} = React.useContext(ContextAPI);


    useEffect(()=>{
      fetchdata()
    },[])


    const fetchdata = async ()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/products")
            setData(response.data.products);
            console.log(response,"all");
        } catch (error) {
            
        }
    }

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
        <div className="flex flex-wrap justify-center">
            {
                data.map((item)=>{
                    return(
                        <>
                        <Card className='border w-[130px] sm:w-[250px] sm:h-[350px] m-5'>
                            <Link to={`/products/${item._id}`} state={item} >
                                <div className="h-[130px] sm:h-[240px]">
                                    <img className='h-full w-full' src={item.mainImage} alt="Loading..." />
                                </div>
                                <div className="border p-2">
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
                        </>
                    )
                })
            }
        </div>



        {/* cndtn kodthtt ellum sort cheyynm rate ,products or quality ike that  */}

        {/* <NewProducts/>
        <TopProducts/>
        <PopularProducts/>
        <MedicalProducts/>
        <UpcomingProducts/> */}
    </>
  )
}

export default StartShopping
