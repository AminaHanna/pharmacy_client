import React from 'react'
import { Link } from 'react-router-dom'

function Card2() {
  return (
    <>
    <div className="flex flex-wrap justify-evenly my-5 gap-2">
          <Link to={`/cards/${'orders'}`}>
            <div className= "bg-lime-100 px-16 py-10 rounded-3xl hover:bg-lime-200">
              <div className="flex gap-2">
                <p className='text-lg sm:text-2xl'><i class="fa-solid fa-users"></i></p>
                <p className='text-xl sm:text-3xl font-extrabold'>14K+</p>
              </div>
              <div className="">
                <p className='font-bold text-lg sm:text-2xl'>Orders<br/>Completed</p>
              </div>
            </div>
          </Link>

          <Link to={`/cards/${'awards'}`}>
            <div className= "bg-slate-300 px-16 py-10 rounded-3xl hover:bg-slate-400">
              <div className="flex gap-2">
                <p className='text-lg sm:text-2xl'><i class="fa-solid fa-award"></i></p>
                <p className='text-xl sm:text-3xl font-extrabold'>250+</p>
              </div>
              <div className="">
                <p className='font-bold text-lg sm:text-2xl'>Won<br/>Awards</p>
              </div>
            </div>
          </Link>

          <Link to={`/cards/${'customers'}`}>
            <div className= "bg-red-100 px-16 py-10 rounded-3xl hover:bg-red-200">
              <div className="flex gap-2">
                <p className='text-lg sm:text-2xl'><i class="fa-solid fa-users"></i></p>
                <p className='text-xl sm:text-3xl font-extrabold'>8K+</p>
              </div>
              <div className="">
                <p className='font-bold text-lg sm:text-2xl'>Happy<br/>Customers</p>
              </div>
            </div>
          </Link>
          
          <Link to={`/cards/${'reviews'}`}>
            <div className= "bg-orange-100 px-16 py-10 rounded-3xl hover:bg-orange-200">
              <div className="flex gap-2">
                <p className='text-lg sm:text-2xl'><i class="fa-solid fa-star"></i></p>
                <p className='text-xl sm:text-3xl font-extrabold'>12K+</p>
              </div>
              <div className="">
                <p className='font-bold text-lg sm:text-2xl'>Positive<br/>Reviews</p>
              </div>
            </div>
          </Link>
    </div>
    </>
  )
}

export default Card2
