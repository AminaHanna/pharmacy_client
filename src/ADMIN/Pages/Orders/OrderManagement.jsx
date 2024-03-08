import { Avatar, Card } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

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


        <div className="flex flex-wrap justify-center">
            {
                OrderManagement.map((item)=>{
                    return(
                        <>
                        <Card className="w-[180px] sm:w-[250px] m-5 p-2">
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
                            <Link to={'/admin/single-orders'} >
                                <button className='mt-2 px-2 border border-pink-900'>check</button>
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
