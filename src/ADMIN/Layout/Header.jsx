import { Avatar } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <>
    <div className="w-full rounded-l-lg bg-pink-900 h-[60px] flex items-center justify-end">
          <p className='text-white'>admin_name</p>
          <Avatar className='mx-5'/>
    </div>
    </>
  )
}

export default Header
