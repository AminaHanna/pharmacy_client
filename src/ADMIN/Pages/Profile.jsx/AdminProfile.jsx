import React from 'react'
import { Avatar } from '@mui/material'
import { Link, Outlet } from 'react-router-dom'

function AdminProfile() {
  return (
    <>
    <div className="flex justify-center">
        <div className="m-5 p-5 bg-slate-100 w-[200px] sm:w-[300px] rounded-2xl">
            <Avatar/>
            <p className='text-xs sm:text-base mt-2'>First Name :</p>
            <p className='text-xs sm:text-base'>Second Name :</p>
            <p className='text-xs sm:text-base'>Email_id :</p>
            <Link to={'update'}><button className='text-xs sm:text-base border mt-3 px-3 border-pink-900 rounded hover:bg-pink-900 hover:text-white'>Update</button></Link>
            <p className='text-xs sm:text-base'>Come back later? <button className='text-xs sm:text-base text-pink-900 font-bold'>Logout</button></p>
        </div>
    </div>
    <div className="flex justify-center mt-5">
      <Outlet/>
    </div>
    </>
  )
}

export default AdminProfile
