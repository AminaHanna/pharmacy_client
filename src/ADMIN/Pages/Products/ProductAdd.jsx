import React, { useState } from 'react'

function ProductAdd() {
    const [ formField, setFormField ] = useState({});


    const onChangeValues = (e) => {
        setFormField({ ...formField, [e.target.name]: e.target.value });
      };

  return (
    <>
    <div className="">
        <form action="" className='m-auto w-[260px] sm:w-[450px] p-5 rounded-2xl border border-pink-900 shadow-md shadow-pink-900'>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Products</p>
            <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                 <img src="" alt="loading..." className='bg-slate-400 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                <input type="file"  name="" id="" accept="image/*" className='text-xs sm:text-base' />
            </div>
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='name' name='name' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='price' name='price' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" placeholder='details' name='details' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='delivery cost' name='delivery' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="button" value="Upload"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default ProductAdd
