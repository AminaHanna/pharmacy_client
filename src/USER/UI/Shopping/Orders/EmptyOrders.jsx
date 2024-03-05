import React from 'react'
import img from "../../../../ExternalComponents/Images/no-orders.png"

function EmptyOrders() {
  return (
    <>
    <div className="text-center p-10">
        <img src={img} alt="" className='w-[100px] md:w-[200px] m-auto' />
        <p className='text-xs sm:text-xl font-bold'>No Orders Yet !</p>
        <p className='text-xs sm:text-base'>No orders are there.</p>
        <button className='bg-pink-800 text-white py-1 px-5 rounded mt-3 text-xs sm:text-base'>Shop Now</button>
      </div>
    </>
  )
}

export default EmptyOrders
