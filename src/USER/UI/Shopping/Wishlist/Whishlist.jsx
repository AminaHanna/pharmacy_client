import React from 'react'
import { Link } from 'react-router-dom'

function Whishlist() {

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
    <div className="bg-slate-100 p-5 rounded-lg w-[350px] m-auto my-5">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>Your Wishlist</p>
            <p className='font-bold'>2 items</p>
          </div>
          <div className="m-5">
            <table className=''>
            <tr className=''>
              <th className='font-thin text-xs sm:text-base'>PRODUCT_DETAILS</th>
              <th className='font-thin text-xs sm:text-base'>PRICE</th>
            </tr>

              {
                cart.map((item)=>{
                  return(
                    <>
                    <tr className='border-b-2'>
                        <td className='flex items-center p-5'>
                          <img src={item.image} alt="" width="60px" />
                          <p className='font-semibold text-xs sm:text-base'>{item.prdctName}</p>
                        </td>
                     
                        <td className='font-semibold p-5 text-xs sm:text-base'>{item.price}</td>
                        <td><button className='text-xs sm:text-base'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    </>
                  )
                })
              }
            </table>

            <Link to={'/cart'}><button className='bg-pink-900 hover:bg-pink-700 text-white rounded-md px-5 py-2 m-16 text-xs sm:text-base'>Move to Cart</button></Link>
          </div>
        </div>
    </>
  )
}

export default Whishlist
