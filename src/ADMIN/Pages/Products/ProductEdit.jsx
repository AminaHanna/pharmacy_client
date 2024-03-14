import React, { useState } from 'react'
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';
import axios from 'axios';

function ProductEdit() {
  const [ formField, setFormField ] = useState({});
  const [ edit, setEdit ] = useState([]);
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [details,setDetails] = useState('');
  const [delivery,setDelivery] = useState('');



  const editProduct = async(e) =>{
    e.preventDefault()
    try {
        const response = await axios.post(`http://localhost:3000/api/products/${id}`,{name:name,price:price,details:details,delivery:delivery},{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
  
        setEdit(response.data.users)
        console.log(response,"response");

        successToast("Edited Succesfully")
      } catch (error) {
        errorToast(error.message);
      }
}



  return (
    <>
    <div className="">
        <form action="" onSubmit={editProduct} className='m-auto w-[260px] sm:w-[450px] p-5 rounded-2xl border border-pink-900 shadow-md shadow-pink-900'>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Products</p>
            <div className="flex justify-center items-center sm:ml-0 ml-2 ">
                 <img src="" alt="loading..." className='bg-slate-400 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-lg m-2' />
                <input type="file"  name="" id="" accept="image/*" className='text-xs sm:text-base' />
            </div>
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)}  className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='details' value={details} onChange={(e)=>setDetails(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='delivery cost' value={delivery} onChange={(e)=>setDelivery(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default ProductEdit
