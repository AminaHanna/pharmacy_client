import React from 'react'
import { Link } from 'react-router-dom'

function Account() {
  return (
    <>
    <div className="bg-slate-100 w-[300px] m-auto my-10 border border-pink-900 rounded-xl shadow-lg shadow-slate-500">
        <div className="p-2">
            <p className='text-xs sm:text-base m-2'>Name :</p>
            <p className='text-xs sm:text-base m-2'>Email Id :</p>
        </div>
        <div className="flex flex-wrap gap-5 my-5">
            <Link to={''}><button className='text-xs sm:text-base m-2 px-3 p-1 text-white bg-pink-900 rounded-md'><i class="fa-regular fa-heart"></i> Orders</button></Link>
            <Link to={''}><button className='text-xs sm:text-base m-2 px-3 p-1 text-white bg-pink-900 rounded-md'><i class="fa-solid fa-bag-shopping"></i> Wishlist</button></Link>
        </div>
        <div className="p-2">
            <p className='text-base sm:text-lg font-medium'>Account Settings</p>
            <Link to={''}><p className='border border-pink-900 p-2 hover:text-white hover:bg-pink-900'>Edit Profile</p></Link>
            <Link to={''}><p className='border border-pink-900 p-2 hover:text-white hover:bg-pink-900'>Saved Address</p></Link>
            <Link to={''}><p className='border border-pink-900 p-2 hover:text-white hover:bg-pink-900'>Select Language</p></Link>
        </div>
        <div className="p-2">
            <p className='text-base sm:text-lg font-medium shadow-md'>Feedback & Information</p>
            <Link to={''}><p className='p-2 hover:text-white hover:bg-pink-900'>Terms, Policies and Licenses</p></Link>
            <Link to={''}><p className='p-2 hover:text-white hover:bg-pink-900'>Browse FAQs</p></Link>
        </div>
        <div className="flex justify-center p-2">
            <button className='border border-pink-900 px-3 py-1 rounded-md hover:text-white hover:bg-pink-900'>Logout</button>
        </div>
    </div>
    </>
  )
}

export default Account
