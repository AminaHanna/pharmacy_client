import React from 'react'
import { Link } from 'react-router-dom'


function Cart() {


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
    <div className="flex flex-wrap justify-center">
      {/* cart details */}
        <div className="bg-slate-100 m-5 p-5 rounded-lg">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>Shopping Cart</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="m-5">
            <table className=''>
            <tr className=''>
              <th className='font-thin'>PRODUCT_DETAILS</th>
              <th className='font-thin'>QUANTITY</th>
              <th className='font-thin'>PRICE</th>
              <th className='font-thin'>TOTAL</th>
            </tr>

              {
                cart.map((item)=>{
                  return(
                    <>
                    <tr className='border-b-2'>
                        <td className='flex items-center p-5'>
                          <img src={item.image} alt="" width="60px" />
                          <p className='font-semibold'>{item.prdctName}</p>
                        </td>
                        <td className='p-5'><button className='font-bold text-2xl m-2'>-</button>
                            <span className='px-2 rounded-md border border-black'>0</span>
                            <button className='font-bold text-2xl m-2'>+</button>
                        </td>
                     
                        <td className='font-semibold p-5'>{item.price}</td>
                        <td className='font-semibold p-5'>total_price</td>
                        <td><button><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    </>
                  )
                })
              }
            </table>

            <button className='text-pink-900 mt-3'><i class="fa-solid fa-arrow-left"></i> Continue Shopping</button>
          </div>
        </div>

        {/* cart summary */}
        <div className="bg-pink-50 m-5 p-5 rounded-lg w-[400px]">
          <p className='font-bold text-lg p-5'>Order Summary</p>
          <p className='font-bold p-2'>ITEMS 2</p>
          <div className="flex justify-between p-2">
            <p className='font-bold'>Subtotal</p>
            <p className='font-bold'>sub_price</p>
          </div>
          <div className="flex justify-between p-2">
            <p className='font-bold'>Tax</p>
            <p className='font-bold'>tax..</p>
          </div>
          <div className="flex justify-between p-2">
            <p className='font-bold'>Shipping Cost</p>
            <p className='font-bold'>shipping_price</p>
          </div>
          <div className="flex justify-between p-2 border-t-2 mt-5">
            <p className='font-bold'>Estimated Total</p>
            <p className='font-bold'>total</p>
          </div>
            <Link to={'/shipping-address'}><button className='bg-pink-900 hover:bg-pink-700 text-white rounded-md px-5 py-2 m-16'>PLACE ORDER</button></Link>
        </div>

    </div>
    </>
  )
}

export default Cart
