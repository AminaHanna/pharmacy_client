import React, { useEffect, useState } from 'react'
import image from '../../../ExternalComponents/Images/pills.png'
import axios from 'axios';
import { errorToast } from '../../../ExternalComponents/Toast/Toast';

function HomePart3() {
  const [ Offercard, setOffercard ] = useState([]);


  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/cards",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response,"res");
  
        setOffercard(response.data.Offercard)
      } catch (error) {
        errorToast(error.message);
      }
};


  return (
    <>
    <div className="flex flex-wrap justify-center">
    {
      Offercard.map((item)=>{
        return(
          <>
          <div className="flex flex-col lg:flex-row w-full md:flex-col sm:flex-col items-center justify-evenly px-5 py-5 bg-slate-100">
            <div className="md:w-[700px]">
              <p className='font-bold my-5'>Todays Hot Offer</p>
              <p className='font-bold text-xl sm:text-3xl lg:text-5xl font-mono'>{item.title}</p>
              <p className='my-2 text-sm sm:text-base'>{item.description}</p>
              <button className='bg-pink-900 hover:bg-pink-700 p-2 sm:p-3 rounded-lg text-white mt-5'>Place An Order Now <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className="">
              <img src={item.image} alt="" className='w-[200px] sm:w-[400px]' />
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

export default HomePart3
