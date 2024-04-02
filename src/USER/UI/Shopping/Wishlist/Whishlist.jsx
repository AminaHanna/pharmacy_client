import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ContextAPI } from '../../Context/Context';
import EmptyWishlist from './EmptyWishlist';


function Whishlist() {

  const [data,setData] = useState([]);
  const {wishlist,refresh,setRefresh} = React.useContext(ContextAPI);


  useEffect(()=>{
    fetchdata();
  },[])


  const fetchdata = async ()=>{
      try {
          const response = await axios.get(`http://localhost:3000/api/wishlist/list/${JSON.parse(localStorage.getItem("users"))._id}`)
        
          setData(response.data.data);
          setRefresh(!refresh);
      } catch (error) {
        setData([]);

          console.log(error);
      }
  }


  const handleRemove = async(id)=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/wishlist/remove-wishlist/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
     
      setRefresh(!refresh)
  
    } catch (error) {
        console.log(error);
    }
  }
  


  return (
    <>
    { wishlist?.length > 0 ? 
    <div className="bg-slate-100 p-5 rounded-lg w-[350px] m-auto my-5">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>Your Wishlist</p>
            <p className='font-bold'>{wishlist.length} items</p>
          </div>
          <div className="m-5">
            <table className=''>
            <tr className=''>
              <th className='font-thin text-xs sm:text-base'>PRODUCT_DETAILS</th>
              <th className='font-thin text-xs sm:text-base'>PRICE</th>
            </tr>

              {
                data.map((item)=>{
                  return(
                    <>
                    <tr className='border-b-2'>
                        <td className='flex gap-2 items-center p-5'>
                          <img src={item.productInfo.mainImage} alt="" width="60px" />
                          <p className='font-semibold text-xs sm:text-base'>{item.productInfo.name}</p>
                        </td>

                        <td>
                          <button className='text-xs sm:text-base' onClick={()=>handleRemove(item.productInfo._id)}>
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </td>
                    </tr>
                    </>
                  )
                })
              }
            </table>

            <Link to={'/cart'}><button className='bg-pink-900 hover:bg-pink-700 text-white rounded-md px-5 py-2 m-16 text-xs sm:text-base'>Move to Cart</button></Link>
          </div>
        </div>
        :
        <EmptyWishlist/>
      }
    </>
  )
}

export default Whishlist
