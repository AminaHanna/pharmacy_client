import { Avatar, Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function OrderManagement() {

    const OrderManagement = [
        {
            orderId:"orderid 1",
            Date:"date",
            UserName:"user name",
            Status:"completed"
        },
        {
            orderId:"orderid 2",
            Date:"date",
            UserName:"user name",
            Status:"processing"
        },
        {
            orderId:"orderid 3",
            Date:"date",
            UserName:"user name",
            Status:"new order"
        },
    ]

  return (
    <>
    <div className="">

        <nav className='flex justify-between m-5 border-b-2 border-pink-900'>
            <div className="hidden md:block">
                <button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>All</button>
                <button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>New</button>
                <button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>Processing</button>
                <button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>Shipped</button>
                <button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>Cancelled</button>
            </div>
            <div className="">
                <button  className='p-2 px-5 hover:bg-pink-900 hover:text-white rounded-full'><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </nav>


        <div className="flex flex-wrap justify-center">
            {
                OrderManagement.map((item)=>{
                    return(
                        <>
                        <Card className="w-[180px] sm:w-[250px] m-5 p-2">
                            <Link to={''} >
                                <div className="flex justify-between">
                                    <div className="">
                                        <p className='text-xs sm:text-base text-slate-500 font-thin'>{item.orderId}</p>
                                        <p className='text-xs sm:text-base'>{item.Date}</p>
                                        <p className='text-xs sm:text-base font-medium'>{item.UserName}</p>
                                        <p className='text-xs sm:text-base text-slate-500'>Status:{item.Status}</p>
                                    </div>
                                    <div className="m-5">
                                        <Avatar className=''/>
                                    </div>
                                </div>
                            </Link>
                        </Card>
                        
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default OrderManagement
