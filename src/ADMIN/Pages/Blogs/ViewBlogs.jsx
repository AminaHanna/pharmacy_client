import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast } from '../../../ExternalComponents/Toast/Toast'

function ViewBlogs() {
  const [ Blogs, setBlogs ] = useState([]);

    // const Blogs = [
    //     {
    //       date:"24 Dec 2023",
    //       blog_title: "Heading",
    //       blog_description: "description about it......"
    //     },
    //     {
    //       date:"24 Dec 2023",
    //       blog_title: "Heading",
    //       blog_description: "description about it......"
    //     },
    //     {
    //       date:"24 Dec 2023",
    //       blog_title: "Heading",
    //       blog_description: "description about it......"
    //     }
    //   ]

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
          errorToast(error.message);
        }
  }

  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        Blogs.map((item)=>{
          return(
          <>
          <div className="flex flex-col justify-between m-5 p-5 w-[300px] sm:w-[600px] h-[300px] sm:h-[300px] border border-slate-400 shadow-md shadow-slate-600 rounded-lg">

          <div className="">
            <p className='text-xs sm:text-base'>{item.date}</p>
            <p className='text-base sm:text-lg m-3'>{item.title}</p>
            <p className='text-xs sm:text-base'>{item.description}</p>
          </div>

          <div className=" flex gap-3">
            <Link to={'/admin/blogs/edit-blog'}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
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

export default ViewBlogs
