import { Avatar } from '@mui/material'
import React, { useState ,useEffect } from 'react';
import axios from "axios";
import { errorToast } from '../../ExternalComponents/Toast/Toast.js';


function Header() {
  const [ user, setUser ] = useState([]);

  useEffect(()=>{
    fetchAPI()
  },[])

  const fetchAPI = async() =>{
    try {
      const response = await axios.get("http://localhost:3000/api/admin/profile",{headers:{
        'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
      }})

      setUser(response.data.user)

    } catch (error) {
      errorToast(error.message);
    }
  }


  return (
    <>
    <div className="w-full rounded-l-lg bg-pink-900 h-[60px] flex items-center justify-end">
        <div className="flex items-center">
          <p className='text-white text-xs sm:text-base'>{user.adminFname} {user.adminLname}</p>
          <Avatar className='mx-5'/>
        </div>
    </div>
    </>
  )
}

export default Header
