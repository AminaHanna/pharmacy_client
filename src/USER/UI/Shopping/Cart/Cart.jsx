import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from "@mui/material"

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


  return (
    <>
    <div className="flex flex-wrap justify-center">
      {/* cart details */}
        <div className="bg-slate-100 m-5 p-5 rounded-lg w-[350px] sm:w-[700px]">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>Shopping Cart</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="m-3 flex flex-wrap">
            {
              cart.map((item)=>{
                return(
                  <>
                  <Card className='w-[300px] m-2'>
                    <div className="flex">
                      <img src={item.image} alt="" className='w-[100px] m-2'/>
                      <div className="mt-3">
                        <p>{item.prdctName}</p>
                        <div className="mt-3 flex justify-between p-3 gap-5 ">
                          <p className='font-bold text-xs sm:text-base'>{item.price}</p>
                          <p className='border px-3 flex gap-3'>
                            <button className='text-lg'>-</button>
                            <button className='font-bold text-xs sm:text-base'>0</button>
                            <button>+</button>
                          </p>
                        </div>
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
    </>
  )
}

export default Cart
