import React, { useEffect, useState } from "react";
import DropdownMenu from "./Dropdown";
import { Link } from "react-router-dom";
import axios from "axios";

import img from "../../ExternalComponents/Images/capsule-hd.png"
import { ContextAPI } from "../UI/Context/Context";
function Header() {
  const [search,SetSearch] = useState('');
  const [searchResult,setSearchResult] = useState([]);
  const {carts,wishlist} = React.useContext(ContextAPI)



  const handleSubmitSearch =async ()=>{
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/search?name=${search}`
      );
      console.log(response.data);
      setSearchResult(response.data.products);
      // setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex flex-row justify-between bg-pink-900 p-5 items-center">
        <a href="/#user-header">
          <div className="text-white text-center text-2xl mb-4 sm:mb-0">
            ᕵᕼᗩᖇᙏᗩᙅᖻ
          </div>
        </a>

        {/* search bar start */}

        <div className="flex items-center mb-4 sm:mb-0 relative">
          <div className="flex gap-2 rounded">
            <input
              type="text"
              className="md:block hidden w-full px-4 py-2 text-orange-800 bg-white border rounded-md focus:border-orange-800 focus:ring-orange-800 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              onChange={(e)=> 
                
                {

                  SetSearch(e.target.value)
                  handleSubmitSearch()
                }
              }
            />
            <button type="button" onClick={handleSubmitSearch} className="hidden md:block px-4 text-white bg-rose-900 hover:bg-rose-700 border-l rounded ">
              Search
            </button>
          </div>

          {/* 
          
          search 
          */}

          
           { search?.length>0 && <div className=" max-h-80 overflow-y-scroll  absolute top-14 bg-white  w-[400px] px-4 py-3">
              { searchResult.map((item)=>{
                return(
                  <Link to={`/products/${item._id}`} state={item}>
                  <div className="mt-1 mb-1 gap-4 flex justify-start items-center">
                  <div className="">
                    <img src={item.mainImage}
                    alt="" className="w-8 h-8" />
                  </div>
                  <div className="">
                    {item.name}
                  </div>
                </div>
                  </Link>
                )
              })}
              
              
            </div>}
          
        </div>

        {/* search bar end */}

        <div className="flex items-center gap-5">
          <Link to={"wishlist"}>
            <button className="text-white text-xl sm:block hidden">
              <i class="fa-regular fa-heart"></i>
              <span className="text-base">{wishlist?.length}</span>
            </button>
          </Link>

          <Link to={"cart"}>
            <div className="">
            <button className="text-white text-xl sm:block hidden">
              <i class="fa-solid fa-cart-shopping"></i>
              <span className="text-base">{carts?.length}</span>
            </button>
            </div>
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
