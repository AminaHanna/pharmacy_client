import React from 'react'
import DropdownMenu from './Dropdown'

function Header() {
  return (
    <>
    <div className="flex flex-col sm:flex-row justify-between bg-pink-900 p-5 items-center">


      <div className="text-white text-2xl mb-4 sm:mb-0">ᕵᕼᗩᖇᙏᗩᙅᖻ</div>


    {/* search bar start */}
    
    <div className="flex items-center mb-4 sm:mb-0">
            <div className="flex border border-orange-800 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-orange-800 bg-white border rounded-md focus:border-orange-800 focus:ring-orange-800 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-rose-900 hover:bg-rose-700 border-l rounded ">
                    Search
                </button>
            </div>
    </div>

    {/* search bar end */}


        <div className="flex items-center gap-5">

          <button className='text-white text-xl'><i class="fa-regular fa-heart"></i></button>

          <button className='text-white text-xl'><i class="fa-solid fa-cart-shopping"></i></button>
            
            {/* Dropdown menu */}

                <DropdownMenu/>

            {/* Dropdown menu end */}

          
        </div>

    </div>
    </>
  )
}

export default Header
