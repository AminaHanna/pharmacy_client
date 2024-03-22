import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from "@mui/material";
import axios from 'axios';
import EmptyCart from './EmptyCart';

function Cart() {


  const cart = [
    {
      image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
      prdctName:"Foley Catheter",
      price:"$12.90",
      prdct_id:"",
    },
    {
      image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
      prdctName:"Foley Catheter",
      price:"$12.90",
      prdct_id:"",
    }
  ]


  const [data,setData] = useState([])

  const [productLimit,setProductLimit] = useState(4)
  const [refresh,setRefresh] = useState(true)


  useEffect(()=>{
    fetchdata()
  },[refresh])


  const fetchdata = async ()=>{
      try {
          const response = await axios.get(`http://localhost:3000/api/cart/listCart/${JSON.parse(localStorage.getItem("users"))._id}`)
          // console.log(response.data,"ttt");
          setData(response.data.data);
          // setData(response.data.data);
      } catch (error) {
        setData([]);

          console.log(error);
      }
  }

  const handleIncrementQuantity = async(id)=>{
      try {
        const response = await axios.post(`http://localhost:3000/api/cart/increment-cart/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
        // console.log(response.data,"ttt");
        // setData(response.data.data);
        // setData(response.data.data);
        setRefresh(!refresh)
    } catch (error) {
        console.log(error);
    }
  }

  const handleDescrementQuantity = async(id)=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
      // console.log(response.data,"ttt");
      // setData(response.data.data);
      // setData(response.data.data);
      setRefresh(!refresh)
  } catch (error) {
      console.log(error);
  }
}

const handleRemoveQuantity = async(id)=>{
  try {
    const response = await axios.get(`http://localhost:3000/api/cart/remove-cart/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
    // console.log(response.data,"ttt");
    // setData(response.data.data);
    // setData(response.data.data);
    setRefresh(!refresh)

} catch (error) {
    console.log(error);
}
}



  return (
    <>
   { data?.length > 0 ?  <div className="flex flex-wrap justify-center">
      {/* cart details */}
        <div className="bg-slate-100 m-5 p-5 rounded-lg w-[350px] sm:w-[700px]">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>Shopping Cart</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="m-3 flex flex-wrap">
            {
              data.map((item)=>{
                return(
                  <>
                  <Card className='w-[300px] m-2'>
                    <div className="flex">
                      <img src={item.productInfo.mainImage} alt="" className='w-[100px] m-2'/>
                      <div className="mt-3">
                        <p>{item.productInfo.name}</p>
                        <div className="mt-3 flex justify-between p-3 gap-5 ">
                          <p className='font-bold text-xs sm:text-base'>{item.productInfo.price}</p>
                          <p className='border px-3 flex gap-3'>
                            <button className='text-lg' onClick={()=>handleDescrementQuantity(item.productInfo._id)} >-</button>
                            <button className='font-bold text-xs sm:text-base'>{item.quantity}</button>
                            <button onClick={()=>handleIncrementQuantity(item.productInfo._id)}>+</button>
                          </p>

                        </div>
                          <button className='hover:underline' onClick={()=>handleRemoveQuantity(item.productInfo._id)}>delete</button>
                      </div>
                    </div>
                  </Card>
                  </>
                )
              })
            }

            {/* <button className='text-pink-900 mt-3'><i class="fa-solid fa-arrow-left"></i> Continue Shopping</button> */}
          </div>
        </div>

        {/* cart summary */}
        <div className="bg-pink-50 m-5 p-5 rounded-lg w-[300px] sm:w-[400px]">
          <p className='font-bold text-lg p-5'>Order Summary</p>
          <p className='font-bold p-2'>ITEMS 2</p>
          <div className="flex justify-between p-2">
            <p className='font-bold text-xs sm:text-base'>Subtotal</p>
            <p className='font-bold text-xs sm:text-base'>sub_price</p>
          </div>
          <div className="flex justify-between p-2">
            <p className='font-bold text-xs sm:text-base'>Tax</p>
            <p className='font-bold text-xs sm:text-base'>tax..</p>
          </div>
          <div className="flex justify-between p-2">
            <p className='font-bold text-xs sm:text-base'>Shipping Cost</p>
            <p className='font-bold text-xs sm:text-base'>shipping_price</p>
          </div>
          <div className="flex justify-between p-2 border-t-2 mt-5">
            <p className='font-bold text-xs sm:text-base'>Estimated Total</p>
            <p className='font-bold text-xs sm:text-base'>total</p>
          </div>
            <Link to={'/shipping-address'}><button className='bg-pink-900 hover:bg-pink-700 text-white rounded-md px-5 py-2 m-16 text-xs sm:text-base'>PLACE ORDER</button></Link>
        </div>

    </div>
    
  :

  <EmptyCart/>
  }
    </>
  )
}

export default Cart
