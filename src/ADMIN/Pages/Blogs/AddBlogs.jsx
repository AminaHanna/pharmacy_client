import axios from 'axios';
import React, { useState } from 'react'
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';

function AddBlogs() {

    const [ formField, setFormField ] = useState({});
    const [date,setDate] = useState('');
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


      const addBlog = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/blogs",{date:date,title:title,description:description},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})

            // setProduct(response.data.users)

            successToast("Blog Added Succesfully")
          } catch (error) {
            errorToast(error.message);
          }
    }

  return (
    <>
    <div className="">
        <form action="" onSubmit={addBlog}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Blogs</p>
            
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type='date' placeholder='date' name='date' value={date}  onChange={(e)=>setDate(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='title' name='title' value={title}  onChange={(e)=>setTitle(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='description' name='description' value={description}  onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="Upload"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default AddBlogs
