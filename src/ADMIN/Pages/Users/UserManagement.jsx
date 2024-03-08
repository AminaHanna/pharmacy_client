import { Avatar } from '@mui/material'
import React from 'react'

function UserManagement() {
    
    const UserManagement = [
        {
            userId:"user id",
            userfname: "user fname",
            userlname: "user lname",
            date: "date"
        },
        {
            userId:"user id",
            userfname: "user fname",
            userlname: "user lname",
            date: "date"
        },
        {
            userId:"user id",
            userfname: "user fname",
            userlname: "user lname",
            date: "date"
        }
    ]

  return (
    <>
    <div className="">
        <div className="flex flex-wrap justify-center gap-5 m-5">
            {
                UserManagement.map((item)=>{
                    return(
                        <>
                        <div className="p-5 border border-pink-900 rounded-xl shadow-md w-[150px] sm:w-[200px]">
                            <Avatar/>
                            <p className='text-xs sm:text-base text-slate-600'>{item.userId}</p>
                            <p className='text-xs sm:text-base font-semibold'>{item.userfname}</p>
                            <p className='text-xs sm:text-base font-semibold'>{item.userlname}</p>
                            <p className='text-xs sm:text-base text-slate-600'>{item.date}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default UserManagement
