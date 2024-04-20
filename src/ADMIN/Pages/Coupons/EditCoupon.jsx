import axios from 'axios';
import React, { useState } from 'react'
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';
import { useNavigate, useParams } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

function EditCoupon() {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [timeline,setTimeline] = useState('');
    const [offerCode,setOfferCode] = useState('');
    const [image,setImage] = useState('');



    const {id} = useParams();
    const navigate = useNavigate();

    const editCards = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.put(`http://localhost:3000/api/coupon/${id}`,{image:image,title:title,description:description,timeline:timeline,offerCode:offerCode},
            {
                headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")}`
            }})

            // setProduct(response.data.users)

            successToast("Cards Edited Succesfully")
            navigate('/admin/offer-cards')
          } catch (error) {
            errorToast(error.message);
          }
    }


  return (
    <>
    <div className="">
        <form action="" onSubmit={editCards}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Cards</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='descripion' name='descripion' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='timeline' name='timeline' value={timeline} onChange={(e)=>setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='offer' name='offerRate' value={offerCode} onChange={(e)=>setOfferCode(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="submit" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditCoupon;
