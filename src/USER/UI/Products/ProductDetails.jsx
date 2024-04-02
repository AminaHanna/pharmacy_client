import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { successToast } from '../../../ExternalComponents/Toast/Toast';
import { ContextAPI } from '../Context/Context';

function ProductDetails() {

    const { prdctlayout } = useParams();
    const { state } = useLocation();
    const {refresh,setRefresh} = React.useContext(ContextAPI)


    const item = state;

    const handleAddToCart = async () => {
      try {
        console.log('api');
        const response = await axios.post('http://localhost:3000/api/cart/addToCart',  {productId:item._id,userId:JSON.parse(localStorage.getItem("users"))?._id} );
        console.log(response);
        setRefresh(!refresh)
        successToast("Succesfully Added into Cart")
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <>
   
    <div className="flex flex-wrap justify-center items-center">
      <div className="m-5">
        <img src={item?.mainImage} alt="" className='bg-slate-100 w-[200px] sm:w-[400px] sm:h-[400px]' />
        <div className="flex justify-center mt-2">
          { 
          item?.image?.map((image)=>  
            <img src={image?.image} alt="" className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]' /> )
          }
        </div>
        <div className="">
          <button type='button' onClick={handleAddToCart} className='bg-pink-700 py-1 px-2 sm:py-2 sm:px-8 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'><i class="fa-solid fa-cart-shopping"></i> ADD TO CART</button>
          <Link to={`/shipping-address/${item?._id}`}>
            <button className='bg-pink-700 py-1 px-2 sm:py-2 sm:px-10 m-2 rounded hover:bg-slate-400 text-white text-xs sm:text-base'><i class="fa-solid fa-bolt"></i> BUY NOW</button>
          </Link>
        </div>
      </div>

      <div className="m-5">
        <div className="border-b-2 p-5">
          <p className='text-pink-900 text-lg sm:text-xl font-semibold'>product name</p>
          <p className='text-pink-900 text-xs sm:text-base'><i class="fa-solid fa-indian-rupee-sign"></i>{item?.price}</p>
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
          <p className='text-xs sm:text-base'>name :{item.name}</p>
          <p className='text-xs sm:text-base'>price : {item.price}</p>
          <p className='text-xs sm:text-base'>Details : {item.details}</p>
          <p className='text-xs sm:text-base'>Quantity :{item.quantity}</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default ProductDetails
