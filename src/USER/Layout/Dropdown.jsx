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
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <Link to={''}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              My Account
            </Link>

            <Link to={''}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              Home
            </Link>

            <Link to={'order'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              My Orders
            </Link>

            <Link to={'cart'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              Cart
            </Link>

            <Link to={'wishlist'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
            >
              Wishlist
            </Link>

            <Link to={'/user-signup'}
              className="block px-4 py-2 text-sm text-pink-900 hover:bg-gray-100"
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
