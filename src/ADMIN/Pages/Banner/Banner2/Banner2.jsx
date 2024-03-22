import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../../../ExternalComponents/Toast/Toast";
import image2 from "../../../../ExternalComponents/Images/charcoaltoothpaste.png";

function Banner2() {
  const [Banner2, setBanner2] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetchAPI();
  }, [refresh]);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner2", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")} `,
        },
      });
      console.log(response, "banner2");

      setBanner2(response.data.Banner2);
    } catch (error) {
      errorToast(error.message);
    }
  };


  const handleDelete = async(id)=>{
    try {
      const response = await axios.delete(`http://localhost:3000/api/banner2/${id}`,{headers:{
            'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
          }})

          setRefresh(!refresh)
      successToast("Deleted Succesfully");
    } catch (error) {
      errorToast(error.message);
    }
  }



  return (
    <>
      {Banner2.map((item) => {
        return (
          <>
            <div className="flex bg-pink-100 hover:bg-pink-200 m-3 rounded-3xl p-10 items-center">
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
                <button
                  onClick={() => handleDelete(item._id)}
                  className="border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base"
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Banner2;
