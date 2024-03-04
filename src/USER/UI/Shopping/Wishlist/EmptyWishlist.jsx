import React from 'react'
import img from "../../../../ExternalComponents/Images/empty-wishlist.png"

function EmptyWishlist() {
  return (
    <>
      <div className="text-center p-10">
        <img src={img} alt="" className='w-[200px] m-auto' />
        <p className='text-xl font-bold'>Your Wishlist is Empty</p>
        <p>Save items that you like in your wishlist.<br/>Review them anytime and easily move them to bag.</p>
        <button className='bg-pink-800 text-white py-1 px-5 rounded mt-3'>Shop Now</button>
      </div>
    </>
  )
}

export default EmptyWishlist
