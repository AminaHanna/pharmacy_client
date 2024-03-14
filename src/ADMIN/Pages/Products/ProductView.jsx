import React, { useEffect, useState } from 'react'
import img from "../../../ExternalComponents/Images/black-garlic-oil.png"
import { Link } from 'react-router-dom'
import axios from 'axios';
import { errorToast } from '../../../ExternalComponents/Toast/Toast';


function ProductView() {

  const [products, setProduct]= useState([]);

    // const products = [
    //     {
    //       main_image:img,
    //       img1:img,
    //       img2:img,
    //       img3:img,
    //       img4:img,
    //       name:"",
    //       price: "",
    //       details:"",
    //       delivery:""
    //     },
    //     {
    //       main_image:img,
    //       img1:img,
    //       img2:img,
    //       img3:img,
    //       img4:img,
    //       name:"",
    //       price: "",
    //       details:"",
    //       delivery:""
    //     }
    //   ]


      useEffect(()=>{
        fetchAPI()
      },[])

      const fetchAPI = async(e) =>{
        try {
            const response = await axios.get("http://localhost:3000/api/products",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            console.log(response,"res");
      
            setProduct(response.data.products)
          } catch (error) {
            errorToast(error.message);
          }
    }

    console.log(products,'---');

  return (
    <>
    <div className="flex flex-wrap justify-center items-center">
      {
        products.map((item)=>{
          return(
            <>
            <div className="bg-slate-100 m-3">
            {/* <div className="m-5">
              <img src={item.img} alt="" className='bg-slate-100 w-[200px] sm:w-[250px] sm:h-[250px]' />
                <div className="flex">
                  <img src={item.img} alt="" className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' />
                  <img src={item.img} alt="" className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' />
                  <img src={item.img} alt="" className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' />
                  <img src={item.img} alt="" className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]' />
                </div>
            </div> */}

            <div className="m-5">

              <div className="mt-3">
                <p className='text-xs sm:text-base'>name :{item.name}</p>
                <p className='text-xs sm:text-base'>price : {item.price}</p>
                <p className='text-xs sm:text-base'>Details : {item.details}</p>
                <p className='text-xs sm:text-base'>Delivery charge : {item.delivery}</p>
              </div>

            </div>

            <div className="flex justify-center gap-3">
                <Link to={'/admin/products/edit-product'}><button className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Edit</button></Link>
                <button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Delete</button>
            </div>
            
            </div>
            </>
          )
        })
      }

    </div>
    </>
  )
}

export default ProductView
