import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Left() {

    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("adminToken")
        localStorage.removeItem("adminData")
        navigate('/admin-signin')
    }
  return (
    <>
    <div className="">
        <NavLink to={''}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Home</button>
        </NavLink>
        <NavLink to={'profile'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Profile</button>
        </NavLink>
        <NavLink to={'categories'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Categories</button>
        </NavLink>
        <NavLink to={'products'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Products</button>
        </NavLink>
        <NavLink to={'blogs'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Blogs</button>
        </NavLink>
        <NavLink to={'banner'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Banner</button>
        </NavLink>
        <NavLink to={'offer-cards'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Offer Card</button>
        </NavLink>
        <NavLink to={'coupon'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Coupon</button>
        </NavLink>
        <NavLink to={'users'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>User Management</button>
        </NavLink>
        <NavLink to={'orders'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Order Management</button>
        </NavLink>
        <NavLink to={'email'}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Email Management</button>
        </NavLink>
        <NavLink onClick={logout}>
            <button className='text-xs sm:text-base px-5 py-3 w-full text-start text-pink-900 hover:bg-pink-900 hover:text-white'>Logout</button>
        </NavLink>
    </div>
    </>
  )
}

export default Left
