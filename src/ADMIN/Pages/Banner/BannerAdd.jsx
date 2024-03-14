import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';

function BannerAdd() {
    const [ formField, setFormField ] = useState({});
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [percentage,setPercentage] = useState('');
    const [rate,setRate] = useState('');
    const [offerRate,setOfferRate] = useState('');


    const addBanner = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/banner",{title:title,description:description,percentage:percentage,rate:rate,offerRate:offerRate},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            

            // setProduct(response.data.users)

            successToast("Products Added Succesfully")
          } catch (error) {
            errorToast(error.message);
          }
    }


  return (
    <>
    <div className="mb-10">
        <form action="" onSubmit={addBanner}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Banner</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <Avatar/>
                <div className="flex flex-col gap-3">
                    <input type="text" placeholder='heading' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                    <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                    <input type="text" placeholder='offer percentage' name='offer' value={percentage} onChange={(e)=>setPercentage(e.target.value)}className='outline outline-1 text-xs sm:text-base rounded px-2' />
                    <input type="text" placeholder='rate' name='rate' value={rate} onChange={(e)=>setRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                    <input type="text" placeholder='offer_rate' name='offer_rate' value={offerRate} onChange={(e)=>setOfferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                </div>
                {/* <Link to={'/admin/banner/banner-preview'}> */}
                    <input type="submit" value="Upload"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
                {/* </Link> */}
            </div>
        </form>
    </div>
    </>
  )
}

export default BannerAdd
