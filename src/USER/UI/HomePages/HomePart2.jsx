import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import UserBanner1 from '../Banners/UserBanner1'
import UserBanner2 from '../Banners/UserBanner2'
import UserBanner3 from '../Banners/UserBanner3'

function HomePart2() {

  return (
    <>
    <div className="flex flex-wrap justify-center items-center mt-5">

          {/* left side */}
          <Link to={''}>
            <div className="flex flex-col sm:flex-row sm:w-[500px] md:w-[600px] md:h-[450px] bg-purple-100 hover:bg-purple-200 m-3 rounded-3xl p-6 sm:p-10 sm:items-center">
                  
                  <UserBanner1/>
            
            </div>
          </Link>
          {/* left side end */}


          {/* right side */}
            <div className="">

                  {/* top */}
                  <Link to={''}>
                    <div className="flex sm:w-[500px] bg-pink-100 hover:bg-pink-200 m-3 rounded-3xl p-10 items-center">

                      <UserBanner2/>
                      
                    </div>
                  </Link>
                  {/* top end */}

                  {/* bottom */}
                  <Link to={''}>
                    <div className="flex sm:w-[500px] bg-blue-100 hover:bg-blue-200 m-3 rounded-3xl p-10 items-center">

                     <UserBanner3/>

                    </div>
                  </Link>
                  {/* bottom end */}

            </div>
          {/* right side end */}

    </div>
    </>
  )
}

export default HomePart2
