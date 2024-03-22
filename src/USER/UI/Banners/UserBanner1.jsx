import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast } from '../../../ExternalComponents/Toast/Toast';

function UserBanner1() {
  const [Banner, setBanner] = useState([]);


  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner");
      console.log(response, "banner1");

      setBanner(response.data.Banner);
    } catch (error) {
      errorToast(error.message);
    }
  };
  return (
    <>
    {
      Banner.map((item)=>{
        return(
          <>
          <div className="py-5 sm:py-1 text-left">
          <p className="bg-pink-900 text-white w-20 text-center rounded-lg p-1">
            {item.percentage} OFF
          </p>
          <p className="text-lg sm:text-2xl font-bold">{item.title}</p>
          <p className="text-sm sm:text-lg">{item.description}</p>
          <p className="font-thin line-through">{item.rate}</p>
          <p className="font-semibold">
            {item.offerRate}
            <span className="font-thin">Including Tax</span>
          </p>
        </div>

        <div className="">
          <img src={item.image} alt="" className="w-[40vh] sm:w-[350px]" />
        </div>
          </>
        )
      })
    }
    </>
  )
}

export default UserBanner1;
