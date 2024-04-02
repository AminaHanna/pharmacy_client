import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast } from '../../../ExternalComponents/Toast/Toast';

function Categories() {
  const [showCategories, setShowCategories] = useState(false);
  const [ categories,setCategories ] = useState([]);
  
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  
  useEffect(()=>{
    fetchAPI()
  },[])


  const fetchAPI = async(e) =>{
    try {
        const response = await axios.get("http://localhost:3000/api/categories",{headers:{
          'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
        }})
        console.log(response,"res");
  
        setCategories(response.data.Category)
      } catch (error) {
        errorToast(error.message)
      }
}

  return (
    <>
     {/* header-start */}
     <div className="flex flex-col sm:flex-row justify-between gap-3 p-4 text-pink-900">


        <div className="hidden sm:flex flex-wrap justify-center gap-5 m-auto w-[full]">

        { categories && categories.map((item)=>{
                return(
                <> 
                <Link to={`/shopping/${item._id}` } className='hover:bg-slate-100 p-2 rounded-lg'>
                    <p>{item.name}</p>
                </Link>
                </>
                )
              })
            }
       

          {/* <Link to={`/shopping/${'coldandflu'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Cold and Flu</p>
          </Link>

          <Link to={`/shopping/${'diabetes'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Diabetes Care</p>
          </Link>

          <Link to={`/shopping/${'digestive-health'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Digestive Health</p>
          </Link>

          <Link to={`/shopping/${'firstaid'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>First Aid</p>
          </Link>

          <Link to={`/shopping/${'skincare'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Skin Care</p>
          </Link>

          <Link to={`/shopping/${'child-babycare'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Child and Baby Care</p>
          </Link>

          <Link to={`/shopping/${'heart-health'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Heart Health</p>
          </Link>

          <Link to={`/shopping/${'eye-earcare'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Eye and Ear Care</p>
          </Link>

          <Link to={`/shopping/${'respiratory-health'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Respiratory Health</p>
          </Link> */}
        </div>



       {/* Toggle button */}
       <button onClick={toggleCategories} className='border p-2 rounded-lg sm:hidden text-sm'>
          {showCategories ? <p className='text-xl'><i class="fa-solid fa-circle-xmark"></i></p> : 'Show Categories'}
        </button>
{/* to smaller scrn */}
        {
        showCategories && (
          <div className="flex flex-wrap gap-3 justify-center sm:justify-between p-4 text-pink-900">


          <Link to={`/shopping/${'pain-releif'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Pain Relief</p>
          </Link>

          <Link to={`/shopping/${'coldandflu'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Cold and Flu</p>
          </Link>

          <Link to={`/shopping/${'diabetes'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Diabetes Care</p>
          </Link>

          <Link to={`/shopping/${'digestive-health'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Digestive Health</p>
          </Link>

          <Link to={`/shopping/${'firstaid'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>First Aid</p>
          </Link>

          <Link to={`/shopping/${'skincare'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Skin Care</p>
          </Link>

          <Link to={`/shopping/${'child-babycare'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Child and Baby Care</p>
          </Link>

          <Link to={`/shopping/${'heart-health'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Heart Health</p>
          </Link>

          <Link to={`/shopping/${'eye-earcare'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Eye and Ear Care</p>
          </Link>

          <Link to={`/shopping/${'respiratory-health'}`} className='hover:bg-slate-100 text-xs p-2 rounded-lg'>
            <p>Respiratory Health</p>
          </Link>

          </div>
        )
}

        </div>
        {/* header-end */}

    </>
  )
}

export default Categories
