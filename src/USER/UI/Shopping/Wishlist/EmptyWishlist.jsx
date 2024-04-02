import React from 'react'
import img from "../../../../ExternalComponents/Images/empty-wishlist.png"
import { Link } from 'react-router-dom'

function EmptyWishlist() {
  return (
    <>
      <div className="text-center p-10">
        <img src={img} alt="" className='w-[200px] m-auto' />
        <p className='sm:text-xl font-bold text-xs'>Your Wishlist is Empty</p>
        <p className='text-xs sm:text-base'>Save items that you like in your wishlist.<br/>Review them anytime and easily move them to bag.</p>
        <Link to={'/start-shopping'}>
          <button className='bg-pink-800 text-white py-1 px-5 rounded mt-3 text-xs sm:text-base'>Shop Now</button>
        </Link>
      </div>
    </>
  )
}

export default EmptyWishlist
