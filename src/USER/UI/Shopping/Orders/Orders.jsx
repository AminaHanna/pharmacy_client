import React from 'react'

function Orders() {

  const cart = [
    {
      image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
      prdctName:"Foley Catheter",
      price:"$12.90",
      prdct_id:"",
    },
    {
      image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
      prdctName:"Foley Catheter",
      price:"$12.90",
      prdct_id:"",
    }
  ]

  return (
    <>
    <div className="bg-slate-100 p-5 rounded-lg  w-[680px] m-auto my-5">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>My Orders</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="m-5">
            <table className=''>
            <tr className=''>
              <th className='font-thin p-2'>PRODUCT</th>
              <th className='font-thin p-2'>Order ID</th>
              <th className='font-thin p-2'>Delivered Date</th>
              <th className='font-thin p-2'>Amount Payable</th>
              <th className='font-thin p-2'>REORDER</th>
            </tr>

              {
                cart.map((item)=>{
                  return(
                    <>
                    <tr className='border-b-2'>
                        <td className='p-2 border-e-2'>
                          <img src={item.image} alt="" width="60px" />
                          <p className='font-semibold'>{item.prdctName}</p>
                        </td>
                        <td className='p-2'>order_id</td>
                        <td className='p-2'>date</td>
                     
                        <td className='font-semibold p-2'>{item.price}</td>
                        <td><button className='bg-pink-800 rounded-lg px-3 py-1 text-white hover:bg-slate-600'>Re-Order</button></td>
                    </tr>
                    </>
                  )
                })
              }
            </table>

          </div>
        </div>
    </>
  )
}

export default Orders
