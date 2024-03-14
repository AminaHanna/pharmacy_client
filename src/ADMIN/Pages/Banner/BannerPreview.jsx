import React, { useEffect, useState } from 'react'
import axios from "axios";
import image1 from "../../../ExternalComponents/Images/black-garlic-oil.png"
import image2 from "../../../ExternalComponents/Images/charcoaltoothpaste.png"
import image3 from "../../../ExternalComponents/Images/yellowtoothpaste.png"

function BannerPreview() {
  const [ Banner, setBanner ] = useState([]);

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/banner",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response,"res");
  
        setBanner(response.data.Banner)
      } catch (error) {
        errorToast(error.message);
      }
}


  return (
    <>
    
    <div className="flex flex-wrap justify-center mt-5">

{/* left side */}

{
  Banner.map((item)=>{
    return(
      <>
 <div className="flex flex-col w-[500px] sm:flex-row bg-purple-100 hover:bg-purple-200 m-3 rounded-3xl p-6 sm:p-10 sm:items-center">
        <div className="py-5 sm:py-1 text-left">
          <p className='bg-pink-900 text-white w-20 text-center rounded-lg p-1'>{item.percentage}</p>
          <p className='text-lg sm:text-2xl font-bold'>{item.title}</p>
          <p className='text-sm sm:text-lg'>{item.description}</p>
          <p className='font-thin line-through'>{item.rate}</p>
          <p className='font-semibold'>{item.offerRate}<span className='font-thin'>Including Tax</span></p>
        </div>

        <div className="">
          <img src={image1} alt="" className='w-[40vh] sm:w-[72vh]' />
        </div>
  </div>

      </>
    )
  })
}
 
{/* left side end */}


{/* right side */}
  {/* <div className="">

        


          <div className="flex bg-pink-100 hover:bg-pink-200 m-3 rounded-3xl p-10 items-center">

            <div className="">
              <p className='bg-pink-900 text-white w-20 text-center rounded-lg p-1'>25% OFF</p>
              <p className='text-base sm:text-xl'>Dental Care Set for Vivid<br/>and Bright Smiles</p>
              <p className='font-thin line-through'>$33.90</p>
              <p className='font-semibold'>$22.90 <span className='font-thin'>Including Tax</span></p>
            </div>

            <div className="">
              <img src={image2} alt="" className='w-[30vh]' />
            </div>
            
          </div>
       




          <div className="flex bg-blue-100 hover:bg-blue-200 m-3 rounded-3xl p-10 items-center">

            <div className="">
              <p className='bg-pink-900 text-white w-20 text-center rounded-lg p-1'>25% OFF</p>
              <p className='text-base sm:text-xl'>BANANA FLAVOURED<br/>TOOTHPASTE</p>
              <p className='font-thin line-through'>$39.90</p>
              <p className='font-semibold'>$37.90 <span className='font-thin'>Including Tax</span></p>
            </div>

            <div className="">
              <img src={image3} alt="" className='w-[30vh]' />
            </div>

          </div>



          

  </div> */}

</div>
    </>
  )
}

export default BannerPreview
