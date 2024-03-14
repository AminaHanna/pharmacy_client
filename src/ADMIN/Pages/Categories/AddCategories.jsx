import React, { useState } from 'react';
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';
import axios from "axios";

function AddCategories() {
  const [name,setName] = useState('');
  const [description,setDescription] = useState('');
  

  const addCategory = async(e) =>{
    e.preventDefault()
    try {
        const response = await axios.post("http://localhost:3000/api/categories",{name:name,description:description},{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }});
        
        console.log(response,"gggg");

        successToast("Products Added Succesfully")
      } catch (error) {
        errorToast(error.message);
      }
}


  return (
    <>
    <div className="">
        <form action="" onSubmit={addCategory}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Category</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='description' name='description' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="Upload"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddCategories
