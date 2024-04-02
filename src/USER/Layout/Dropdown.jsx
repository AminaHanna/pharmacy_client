import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
        
      <button
        onClick={toggleDropdown}
        className="text-white py-2 px-4 rounded focus:outline-none"
      >
            <div className="flex gap-2 items-center">
            <Avatar/><i class="fa-solid fa-angle-down"></i>
            </div>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 sm:w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link to={'account'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              <p className='flex gap-1 sm:gap-2'>
                <span><i class="fa-solid fa-user"></i></span>
                <span>My Account</span>
              </p>
            </Link>

            <Link to={''}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              <p className='flex gap-1 sm:gap-2'>
                <span><i class="fa-solid fa-house"></i></span>
                <span> Home</span>
              </p>
            </Link>

            <Link to={'order'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              <p className='flex gap-1 sm:gap-2'>
                <span><i class="fa-solid fa-bag-shopping"></i></span>
                <span> My Orders</span>
              </p>
            </Link>

            <Link to={'cart'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              <p className='flex gap-1 sm:gap-2'>
                <span><i class="fa-solid fa-cart-shopping"></i></span>
                <span> Cart</span>
              </p>
            </Link>

            <Link to={'wishlist'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              <p className='flex gap-1 sm:gap-2'>
                <span><i class="fa-solid fa-heart"></i></span>
                <span> Wishlist</span>
              </p>
            </Link>

            <Link to={'/admin'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              Admin
            </Link>

            <Link to={'/user-signup'}
              className="block px-4 py-2 text-sm text-white bg-pink-900 hover:bg-gray-100 hover:text-pink-900"
            >
              Logout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
