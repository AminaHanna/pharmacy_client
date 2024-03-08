import React, { useState } from 'react'

function EditCards() {
    const [ formField, setFormField ] = useState({});


    const onChangeValues = (e) => {
        setFormField({ ...formField, [e.target.name]: e.target.value });
      };

  return (
    <>
    <div className="">
        <form action="">
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Cards</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='title' name='name' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='descripion' name='descripion' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="button" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditCards
