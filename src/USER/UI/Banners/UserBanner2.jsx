import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast } from '../../../ExternalComponents/Toast/Toast';

function UserBanner2() {
  const [Banner2, setBanner2] = useState([]);


  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner2");
      console.log(response, "banner2");

      setBanner2(response.data.Banner2);
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <>
    {
      Banner2.map((item)=>{
        return(
          <>
           <div className="">
                <p className="bg-pink-900 text-white w-20 text-center rounded-lg p-1">
                  {item.percentage} OFF
                </p>
                <p className="text-base sm:text-xl">{item.title}</p>
                <p className="font-thin line-through">{item.rate}</p>
                <p className="font-semibold">
                  {item.offerRate}
                  <span className="font-thin">Including Tax</span>
                </p>
              </div>

              <div className="">
                <img src={item.image} alt="" className="w-[30vh]" />
              </div>
          </>
        )
      })
    }
    </>
  )
}

export default UserBanner2
