import React from 'react'
import Banners from './Banners'
import { Link, Outlet } from 'react-router-dom'

function BannerLayout() {
  return (
<>
    <div className="border-b-2 border-pink-900 flex justify-center">
      <Link to={''}>
        <button className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>View</button>
      </Link>
    </div>
    <Banners/>
    <Outlet/>
    </>
  )
}

export default BannerLayout
