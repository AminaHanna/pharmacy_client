import { Avatar } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <>
    <div className="w-full rounded-l-lg bg-pink-900 h-[60px] flex items-center justify-end">
        <div className="flex items-center">
          <p className='text-white text-xs sm:text-base'>admin_name</p>
          <Avatar className='mx-5'/>
        </div>
    </div>
    </>
  )
}

export default Header
