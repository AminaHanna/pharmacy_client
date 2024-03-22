import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner1 from "./Banner1/Banner1";
import Banner2 from "./Banner2/Banner2";
import Banner3 from "./Banner3/Banner3";

function BannerPreview() {
  const [Banner, setBanner] = useState([]);

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get("http://localhost:3000/api/banner", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")} `,
        },
      });
      console.log(response, "res");

      setBanner(response.data.Banner);
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mt-5">
        <Banner1/>

        <div className="">
          <Banner2/>
          <Banner3/>
        </div>
        
      </div>
    </>
  );
}

export default BannerPreview;
