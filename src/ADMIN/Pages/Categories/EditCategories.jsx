import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from '../../../ExternalComponents/Toast/Toast';
import axios from 'axios';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function EditCategories() {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');


  const value = useLocation();
  const {id} = useParams();
  const navigate = useNavigate();

  const handleEdit = async(e) =>{
    e.preventDefault()
    try {
        const response = await axios.put(`http://localhost:3000/api/categories/${id}`,{name:name,description:description},
        {
          headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")}`
          }
        })
  
        console.log(response,"response");
        successToast("Edited Succesfully");
        navigate('/admin/categories')
      } catch (error) {
        errorToast(error.message);
      }
}


useEffect(()=>{
  setName(value.state.name)
  setDescription(value.state.description)
},[])


  return (
    <>
    <div className="">
        <form action="" onSubmit={handleEdit}>
            <p className='text-base sm:text-lg mt-3 p-3 text-center'>Edit Category</p>
      
            <div className="flex flex-col w-[200px] gap-3 m-auto mt-3">
                <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="text" placeholder='descripion' value={description} onChange={(e)=>setDescription(e.target.value)} className='outline outline-1 text-xs sm:text-base rounded px-2' />
                <input type="submit" value="submit"  className='text-pink-900 border-pink-900 border text-xs sm:text-base hover:bg-pink-900 hover:text-white'/>
            </div>
        </form>
    </div>
    </>
  )
}

export default EditCategories
