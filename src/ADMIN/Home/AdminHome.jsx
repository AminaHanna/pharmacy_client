import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function AdminHome() {
  return (
    <>
    <div className="flex gap-5 flex-wrap mt-8 sm:mt-5 justify-center">
        <button className='text-xs sm:text-base p-5 border border-pink-900 hover:bg-pink-900 hover:text-white rounded-lg'>
            <p>ORDERS</p>
            <p>No. of Orders</p>
        </button>
        <button className='text-xs sm:text-base p-5 border border-pink-900 hover:bg-pink-900 hover:text-white rounded-lg'>
            <p>Users</p>
            <p>No. of Users</p>
        </button>
    </div>
    <div className="flex sm:w-full w-[300px]">
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Users', 'Orders', 'Products'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        width={500}
        height={300}
      />
    </div>
    </>
  )
}

export default AdminHome
