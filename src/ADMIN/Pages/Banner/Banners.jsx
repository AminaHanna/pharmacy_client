import React from 'react'
import { Link } from 'react-router-dom'

function Banners() {
  return (
    <>
    <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mt-5 sm:mt-16">
      <Link to={'banner-add'}>
        <button className='bg-slate-200 p-8 rounded-md sm:p-16'>Banner 1
          <p className='text-xl'><i class="fa-sharp fa-solid fa-plus"></i></p>
        </button>
      </Link>

      <Link to={'banner-add'}>
        <button className='bg-red-100 p-8 rounded-md sm:p-16'>Banner 2
          <p className='text-xl'><i class="fa-sharp fa-solid fa-plus"></i></p>
        </button>
      </Link>

      <Link to={'banner-add'}>
        <button className='bg-violet-100 p-8 rounded-md sm:p-16'>Banner 3
          <p className='text-xl'><i class="fa-sharp fa-solid fa-plus"></i></p>
        </button>
      </Link>
    </div>
    </>
  )
}

export default Banners
