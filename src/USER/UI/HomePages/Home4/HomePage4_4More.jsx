import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { errorToast } from '../../../../ExternalComponents/Toast/Toast'


function HomePage4_4More() {
    const [ blogs,setBlogs ] = useState([]);


    useEffect(()=>{
        fetchAPI()
      },[])
    
    
      const fetchAPI = async(e) =>{
        try {
            const response = await axios.get("http://localhost:3000/api/blogs",{headers:{
              'Authorization':`Bearer ${localStorage.getItem("adminToken")} `
            }})
            console.log(response,"res");
      
            setBlogs(response.data.Blogs)
          } catch (error) {
            errorToast(error.message)
          }
    }

  return (
    <>
    <p className='text-2xl sm:text-4xl font-medium text-center mt-10'>Our Latest News & Blogs</p>
    <div className="flex flex-wrap justify-center m-2">

    {/* right */}

    <div className="">
        
        {/* right-3 */}
        
        { blogs?.map((item,index)=>{
            if(index==3){
                return(
                    <>
                    <div className="flex w-[550px] sm:flex-row flex-col items-center bg-red-50 rounded-xl m-2 p-10 gap-1">
                        <div className="w-[250px]">
                            <img src={item?.image} alt="" width="150px" />
                        </div>
                        <div className="">
                            <div className="flex gap-5">
                                <p className='p-1 text-sm bg-pink-800 rounded text-white'>Doctor</p>
                                <p className='sm:font-medium p-1'>24 Dec, 2023</p>
                            </div>
                            <div className="">
                                <p className='text-lg sm:text-3xl font-medium'>{item.name}</p>
                                <p className='sm:text-base text-xs'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
           
        }) }

    </div>

    {/* right end */}


    </div>
    </>
  )
}

export default HomePage4_4More;
 
