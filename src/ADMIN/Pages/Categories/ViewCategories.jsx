import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function ViewCategories() {
  const [ category, setCategory ] = useState([]);

  // const categories = [
  //   {
  //     category_name: "Category 1",
  //     cate_description: "description about it......"
  //   },
  //   {
  //     category_name: "Category 2",
  //     cate_description: "description about it......"
  //   },
  //   {
  //     category_name: "Category 3",
  //     cate_description: "description about it......"
  //   }
  // ]


  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/categories",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response,"res");
  
        setCategory(response.data.Category)
      } catch (error) {
        errorToast(error.message);
      }
}


  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        category.map((item)=>{
          return(
          <>
          <div className="flex flex-col justify-between items-center bg-pink-50 m-5 p-5 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] border border-pink-900 shadow-md shadow-pink-900 rounded-lg">

          <div className="">
            <p className='text-base sm:text-lg'>{item.name}</p>
            <p className='text-xs sm:text-base'>{item.description}</p>
          </div>

          <div className=" flex gap-3">
            <Link to={'/admin/categories/edit-category'}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
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

export default ViewCategories
