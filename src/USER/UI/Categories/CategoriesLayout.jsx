import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { errorToast, successToast } from "../../../ExternalComponents/Toast/Toast";
import axios from "axios";
import { ContextAPI } from "../Context/Context";

function CategoriesLayout() {
  const { page } = useParams();
  const [products, setProducts] = useState([]);
  const {refresh,setRefresh} = React.useContext(ContextAPI);


  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/products/getprroducts-bycat/${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")} `,
          },
        }
      );
      console.log(response, "res");

      setProducts(response.data.products);
    } catch (error) {
      errorToast(error.message);
    }
    console.log(products, "products");
  };


  const addToCart = async (id) => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart/addToCart',  {productId:id,userId:JSON.parse(localStorage.getItem("users"))?._id} );
      console.log(response);
      setRefresh(!refresh)
      successToast("Succesfully Added into Cart")
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      {/* {page} */}
      <div className="flex flex-wrap justify-center">
      {products.map((item) => {
        return (
          <>
            <Card className="border w-[130px] sm:w-[250px] sm:h-[350px] m-5">
              <Link to={`/products/${item._id}`}>
                <div className="h-[130px] sm:h-[240px]">
                  <img className="h-full w-full" src={item.mainImage} alt="Loading..." />
                </div>
                <div className="border p-2">
                  <p className="text-xs sm:text-xl font-bold">{item.name}</p>
                  <p className="text-xs sm:text-base">{item.price}</p>
                </div>
              </Link>
              <div className="">
                <button type='button' 
                    onClick={()=>{
                        addToCart(item._id)
                    }}
                    className="bg-pink-900 text-white text-xs sm:text-base rounded w-full py-2">
                  Add to Cart <i class="fa-solid fa-bag-shopping"></i>
                </button>
              </div>
            </Card>
          </>
        )
      })}
      </div>
    </>
  );
}

export default CategoriesLayout;
