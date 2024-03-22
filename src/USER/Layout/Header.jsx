import React, { useEffect, useState } from "react";
import DropdownMenu from "./Dropdown";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const [count,setCount] = useState(0);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/cart/listCart/${
          JSON.parse(localStorage.getItem("users"))._id
        }`
      );
      console.log(response.data.data.length);
      setCount(response.data.data.length);
      // setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-between bg-pink-900 p-5 items-center">
        <a href="/#user-header">
          <div className="text-white text-center text-2xl mb-4 sm:mb-0">
            ᕵᕼᗩᖇᙏᗩᙅᖻ
          </div>
        </a>

        {/* search bar start */}

        <div className="flex items-center mb-4 sm:mb-0">
          <div className="flex border border-orange-800 rounded">
            <input
              type="text"
              className="md:block hidden w-full px-4 py-2 text-orange-800 bg-white border rounded-md focus:border-orange-800 focus:ring-orange-800 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
            <button className="hidden md:block px-4 text-white bg-rose-900 hover:bg-rose-700 border-l rounded ">
              Search
            </button>
          </div>
        </div>

        {/* search bar end */}

        <div className="flex items-center gap-5">
          <Link to={"wishlist"}>
            <button className="text-white text-xl sm:block hidden">
              <i class="fa-regular fa-heart"></i>
            </button>
          </Link>

          <Link to={"cart"}>
            <button className="text-white text-xl sm:block hidden">
              <i class="fa-solid fa-cart-shopping"></i>
              {count}
            </button>
          </Link>

          {/* Dropdown menu */}

          <DropdownMenu />

          {/* Dropdown menu end */}
        </div>
      </div>
    </>
  );
}

export default Header;
