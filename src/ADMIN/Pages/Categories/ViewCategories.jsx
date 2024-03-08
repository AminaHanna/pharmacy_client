import React from 'react'
import { Link } from 'react-router-dom'

function ViewCategories() {

  const categories = [
    {
      category_name: "Category 1",
      cate_description: "description about it......"
    },
    {
      category_name: "Category 2",
      cate_description: "description about it......"
    },
    {
      category_name: "Category 3",
      cate_description: "description about it......"
    }
  ]

  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        categories.map((item)=>{
          return(
          <>
          <div className="flex flex-col justify-between items-center bg-pink-50 m-5 p-5 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] border border-pink-900 shadow-md shadow-pink-900 rounded-lg">

          <div className="">
            <p className='text-base sm:text-lg'>{item.category_name}</p>
            <p className='text-xs sm:text-base'>{item.cate_description}</p>
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
