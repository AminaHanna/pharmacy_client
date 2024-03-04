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
        <img src={img} alt="" width="400px" className='bg-slate-100' />
        <div className="flex">
          <img src={img} alt="" width="100px" />
          <img src={img} alt="" width="100px" />
          <img src={img} alt="" width="100px" />
          <img src={img} alt="" width="100px" />
        </div>
        <div className="">
          <button className='bg-pink-700 py-2 px-8 m-2 rounded hover:bg-slate-400 text-white'><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
          <button className='bg-pink-700 py-2 px-10 m-2 rounded hover:bg-slate-400 text-white'><i class="fa-solid fa-bolt"></i> BUY NOW</button>
        </div>
      </div>

      <div className="m-5">
        <div className="border-b-2 p-5">
          <p className='text-pink-900 text-xl font-semibold'>product name</p>
          <p className='text-pink-900'><i class="fa-solid fa-indian-rupee-sign"></i>price</p>
          <p className='text-pink-900'><i class="fa-solid fa-truck"></i>Free Delivery</p>
        </div>

        <div className="mt-5">
          <p className='text-pink-900'><i class="fa-solid fa-bag-shopping"></i> Faster checkout</p>
          <p className='text-pink-900'><i class="fa-solid fa-retweet"></i> Easier returns and exchanges</p>
          <p className='text-pink-900'><i class="fa-solid fa-circle-info"></i> Quick order information and tracking</p>
          <p className='text-pink-900'><i class="fa-solid fa-truck"></i>Cash on Delivery Available</p>
        </div>

        <div className="mt-10">
          <p className='text-2xl text-slate-500'>Product Details</p>
          <p>name :pd_name</p>
          <p>price : rate</p>
          <p>Details : details of prdct and other data</p>
          <p>Quantity :quantities</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default ProductDetails
