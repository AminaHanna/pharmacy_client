import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';

function ProductAdd() {
    const [ product,setProduct ] = useState([]);
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [details,setDetails] = useState('');
    const [delivery,setDelivery] = useState('');


    const addProduct = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:3000/api/products",{name:name,price:price,details:details,delivery:delivery},{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            
            console.log(response,"gggg");
            // setProduct(response.data.users)

            successToast("Products Added Succesfully")
          } catch (error) {
            errorToast(error.message);
          }
    }
    


  return (
    <>
    <div className="">
        <form action="" onSubmit={addProduct} className='m-auto w-[260px] sm:w-[450px] p-5 rounded-2xl border border-pink-900 shadow-md shadow-pink-900'>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Add Products</p>
            <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                 <img src="" alt="loading..." className='bg-slate-400 w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                <input type="file"  name="" id="" accept="image/*" className='text-xs sm:text-base' />
            </div>
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" value={name}  placeholder='name' onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" value={price}  placeholder='price' onChange={(e)=>setPrice(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded  px-2' />
                <input type="text" value={details}  placeholder='details' onChange={(e)=>setDetails(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" value={delivery}  placeholder='delivery cost' onChange={(e)=>setDelivery(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="Upload"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default ProductAdd;
