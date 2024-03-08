import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <>
    <div className="flex gap-5 m-3 mt-5 border-b-2 justify-center border-pink-900">
        <Link to={'/admin/blogs/add-blog'}><button className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Add</button></Link>
        <Link to={'/admin/blogs/'}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>View</button></Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Blogs
