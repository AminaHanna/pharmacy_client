import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { errorToast } from '../../../../ExternalComponents/Toast/Toast'


function HomePage4_1More() {
    const [ blogs,setBlogs ] = useState([]);


    useEffect(()=>{
        fetchAPI()
      },[])
    
    
      const fetchAPI = async(e) =>{
        try {
            const response = await axios.get("http://localhost:3000/api/blogs",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            console.log(response,"res");
      
            setBlogs(response.data.Blogs)
          } catch (error) {
            errorToast(error.message)
          }
    }

  return (
    <>
    <p className='text-2xl sm:text-4xl font-medium text-center mt-10 mb-10'>Our Latest News & Blogs</p>
    <div className="flex flex-wrap justify-center m-2">


    {/* left */}
        <div className="bg-red-50 px-10 py-2 w-[400px] sm:w-[750px] mb-10 rounded-lg flex flex-col items-center justify-center">
            <div className="">
                <img src={blogs[0]?.image} alt="" width="300px" />
            </div>
            <div className="mt-8">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-pink-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>{blogs[0]?.date}</p>
                </div>
                <div className="sm:w-[500px]">
                    <p className='text-lg sm:text-3xl'>{blogs[0]?.name}</p>
                    <p className='sm:text-base text-xs'>{blogs[0]?.description}</p>
                </div>
            </div>
        </div>
    {/* left end */}

    </div>
    </>
  )
}

export default HomePage4_1More;
 
