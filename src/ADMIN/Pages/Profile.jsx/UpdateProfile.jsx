import React, { useState } from 'react'

function UpdateProfile() {

    const [ formField, setFormField ] = useState({});


    const onChangeValues = (e) => {
      setFormField({ ...formField, [e.target.name]: e.target.value });
    };

  return (
    <>
    <div className="">
    <form action="">
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Update your profile</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='first name' name='fname' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='second name' name='lname' onChange={onChangeValues} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="button" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default UpdateProfile
