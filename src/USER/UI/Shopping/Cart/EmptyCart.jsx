import React from 'react'
import img from "../../../../ExternalComponents/Images/emptycart.png"

function EmptyCart() {
  return (
    <>
      <div className="text-center p-10">
        <img src={img} alt="" className='w-[200px] m-auto' />
        <p className='text-xs sm:text-xl font-bold'>Oops! Your bag is Empty!</p>
        <p className='text-xs sm:text-base'>There is nothing in your bag.Let's add some items.</p>
        <button className='bg-pink-800 text-white py-1 px-5 rounded mt-3 text-xs sm:text-base'>Shop Now</button>
      </div>
    </>
  )
}

export default EmptyCart
