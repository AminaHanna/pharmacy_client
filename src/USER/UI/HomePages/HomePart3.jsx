import React from 'react'
import image from '../../../ExternalComponents/Images/pills.png'

function HomePart3() {
  return (
    <>
    <div className="flex flex-wrap items-center justify-evenly py-5 bg-slate-100">
      <div className="">
        <p className='font-bold my-5'>Todays Hot Offer</p>
        <p className='font-bold text-5xl font-mono'>Unlock 50% Off on<br/>Essential Medicines!</p>
        <p className='my-2'>Embrace wellness without breaking the bank! Enjoy a generous<br/>25% discount on a wide range of vital medicines at our online<br/>pharmacy.Your health matters,and so does your budget.</p>
        <button className='bg-pink-900 hover:bg-pink-700 p-3 rounded-lg text-white mt-5'>Place An Order Now <i class="fa-solid fa-arrow-right"></i></button>
      </div>

      <div className="">
        <img src={image} alt="" className='w-[400px]' />
      </div>
    </div>
    </>
  )
}

export default HomePart3
