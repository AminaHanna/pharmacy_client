import React from 'react'
import { useParams } from 'react-router-dom'
import img from "../../../ExternalComponents/Images/black-garlic-oil.png"

function ProductDetails() {

    const { prdctlayout } = useParams();

  return (
    <>
    { prdctlayout }

    <div className="flex flex-wrap justify-center items-center">
      <div className="m-5">
        <img src={img} alt="" className='bg-slate-100 w-[200px] sm:w-[400px] sm:h-[400px]' />
        <div className="flex">
          <img src={img} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
          <img src={img} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
          <img src={img} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
          <img src={img} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' />
        </div>
        <div className="">
          <button className='bg-pink-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
          <button className='bg-pink-700 py-1 px-2 sm:py-2 sm:px-10 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'><i class="fa-solid fa-bolt"></i> BUY NOW</button>
        </div>
      </div>

      <div className="m-5">
        <div className="border-b-2 p-5">
          <p className='text-pink-900 text-lg sm:text-xl font-semibold'>product name</p>
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-indian-rupee-sign"></i>price</p>
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-truck"></i>Free Delivery</p>
        </div>

        <div className="mt-5">
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-bag-shopping"></i> Faster checkout</p>
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-retweet"></i> Easier returns and exchanges</p>
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-circle-info"></i> Quick order information and tracking</p>
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-truck"></i>Cash on Delivery Available</p>
        </div>

        <div className="mt-10">
          <p className='sm:text-2xl text-slate-500'>Product Details</p>
          <p className='text-xs sm:text-base'>name :pd_name</p>
          <p className='text-xs sm:text-base'>price : rate</p>
          <p className='text-xs sm:text-base'>Details : details of prdct and other data</p>
          <p className='text-xs sm:text-base'>Quantity :quantities</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default ProductDetails
