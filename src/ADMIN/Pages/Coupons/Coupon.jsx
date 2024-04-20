import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Coupon() {
  return (
    <>
    <div className="flex gap-5 m-3 mt-5 border-b-2 justify-center border-pink-900">
        <Link to={'/admin/coupon/add-coupon'}><button className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Add</button></Link>
        <Link to={'/admin/coupon/'}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>View</button></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Coupon;
