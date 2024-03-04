import React from 'react'
import { Link } from 'react-router-dom'

function Left() {
  return (
    <>
    <div className=" bg-slate-100 w-[250px] min-h-screen rounded-md">
        <p className="text-3xl text-pink-900 p-5">ᕵᕼᗩᖇᙏᗩᙅᖻ</p>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Home</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Profile</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Categories</button>
        </Link>
        <Link to={'product'}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Products</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Blogs</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Offer Card</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>User Management</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Order Management</button>
        </Link>
        <Link to={''}>
            <button className='px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Logout</button>
        </Link>
    </div>
    </>
  )
}

export default Left
