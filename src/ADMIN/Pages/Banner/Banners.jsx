import React from 'react'

function Banners() {
  return (
    <>
    <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mt-5 sm:mt-16">
      <button className='bg-slate-200 p-8 rounded-md sm:p-16'>Banner 1</button>
      <button className='bg-red-100 p-8 rounded-md sm:p-16'>Banner 2</button>
      <button className='bg-violet-100 p-8 rounded-md sm:p-16'>Banner 3</button>
    </div>
    </>
  )
}

export default Banners
