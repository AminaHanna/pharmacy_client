import React, { useState } from 'react'
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';
import axios from 'axios';

function AddCards() {
    const [ add, setAdd ] = useState([])
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [timeline,setTimeline] = useState('');
    const [offerRate,setOfferRate] = useState('');


      const addCards = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/cards",{title:title,description:description,timeline:timeline,offerRate:offerRate},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            
            // setAdd(response.data.users)
            successToast("Added Succesfully")
        } catch (error) {
            errorToast(error.message)
        }
      }

  return (
    <>
    <div className="">
        <form action="" onSubmit={addCards}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Cards</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='timeline' name='name' value={timeline} onChange={(e)=>setTimeline(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='offer rate' name='name' value={offerRate} onChange={(e)=>setOfferRate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="submit" value="Upload"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddCards
