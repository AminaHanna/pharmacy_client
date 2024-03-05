import React from 'react'

function OrderSearch() {
  return (
    <>
    <div className="flex justify-center">
        <div className="p-2 bg-slate-200 sm:m-10 mt-5 sm:w-[350px]">
            <form action="" className='flex flex-col items-center'>
                <label className='text-xs sm:text-base'>
                    Order-ID : 
                    <input type="text" className='m-2 border border-pink-950' />
                </label>
                <label className='text-xs sm:text-base'>
                    Date : 
                    <input type="date" className='m-2 border border-pink-950' />
                </label>
                <label className='text-xs sm:text-base'>
                    Order Status : 
                    <input type="text" className='m-2 border border-pink-950' />
                </label>
                <div className="flex gap-5">
                    <button className='text-xs sm:text-base border hover:bg-pink-900 hover:text-white border-pink-900 px-2'>Search</button>
                    <button className='text-xs sm:text-base border hover:bg-pink-900 hover:text-white border-pink-900 px-2'>Reset</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default OrderSearch
