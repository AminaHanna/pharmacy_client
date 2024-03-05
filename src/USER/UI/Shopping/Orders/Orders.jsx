import React from 'react';
import { Card } from "@mui/material"

function Orders() {

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

  return (
    <>
    <div className="bg-slate-100 p-5 rounded-lg w-[400px] md:w-[850px] m-auto my-5">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>My Orders</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="flex flex-wrap my-5 gap-5">
      
            {
              cart.map((item)=>{
                return(
                  <>
                    <Card className='w-[350px] p-2'>
                      <div className="flex justify-between m-2">
                        <div className="">
                          <p className='text-xs sm:text-base'>Date</p>
                          <p className='text-xs sm:text-base text-slate-500'>Order ID- order_id</p>
                        </div>
                        <div className="">
                          <p className='text-xs sm:text-base'>Amount Payable</p>
                          <p className='text-right font-bold text-xs sm:text-base'>{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={item.image} alt="" className='w-[100px]' />
                        <p className='text-xs sm:text-base'>{item.prdctName}</p>
                      </div>
                      <p className='text-xs sm:text-base'>Delivered on <span className='font-bold'>delivered_date</span></p>
                      <div className="flex justify-center gap-5">
                        <button className='text-pink-900 border border-pink-900 p-1 rounded-md text-xs sm:text-base hover:bg-pink-900 hover:text-white'>View Details</button>
                        <button className='bg-pink-800 text-white p-1 rounded-md text-xs sm:text-base hover:bg-white hover:text-pink-900 border border-pink-900'>Re-Order</button>
                      </div>
                    </Card>
                  </>
                )
              })
            }

          </div>
        </div>
    </>
  )
}

export default Orders
