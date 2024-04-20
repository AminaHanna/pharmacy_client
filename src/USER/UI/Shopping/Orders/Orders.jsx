import React, { useEffect, useState } from 'react';
import { Card } from "@mui/material"
import axios from 'axios';

function Orders() {

 
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetchdata();
  },[]);


  const fetchdata = async ()=>{
      try {
          const response = await axios.get(`http://localhost:3000/api/order/user/${JSON.parse(localStorage.getItem("users"))._id}`)
        
          setData(response.data.data);
      } catch (error) {
        setData([]);
        console.log(error);
      }
  }

  return (
    <>
    <div className="bg-slate-100 p-5 rounded-lg w-[350px] md:w-[850px] m-auto my-5">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>My Orders</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="flex flex-wrap my-5 gap-5">
            {
              data.map((item)=>{
                return(
                  <div key={item._id} className='flex flex-col w-[300px] gap-5 border px-3 py-4 shadow-md'>
                    

                    <p>{item?.productInformation?.name}</p>
                    <p>{item?.productInformation?.details}</p>
                    <img src={item.productInformation?.mainImage} alt="..." width={"200px"} loading='lazy'  />

                    <p>amount: {item.paymentInformation?.price}</p>
                    <p>order id : {item.paymentInformation?.orderId}</p>

                  </div>
                )
              })
            }

          </div>
        </div>
    </>
  )
}

export default Orders
