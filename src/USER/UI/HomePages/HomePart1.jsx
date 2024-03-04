import React from 'react'
import image from '../../../ExternalComponents/Images/capsule-hd.png'
import { Link } from 'react-router-dom'

function HomePart1() {
  return (
    <>
     {/* main-title and img */}
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col bg-slate-100 justify-evenly items-center">
          <div className="text-center md:text-left mb-4 sm:mb-0">
            <p className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-pink-900 font-mono'>Your Prescription for<br/> Affordable Health<br/>Solutions!</p>
            <p className='text-pink-900 p-3'>Elevate your health journey with exclusive discountes and unparalleled<br/>convenience.Your path to well-being starts here,where every purchase<br/>is a prescription for savings.</p>

            <Link to={'/start-shopping'}>
              <button className='bg-pink-900 hover:bg-pink-700 text-white p-3 ml-5 rounded'>Start Shopping <i class="fa-solid fa-bag-shopping"></i></button>
            </Link>
            
          </div>
            <img src={image} alt="" className='w-full sm:w-[500px]' />
        </div>
        {/* main-title and img end */}
    </>
  )
}

export default HomePart1
