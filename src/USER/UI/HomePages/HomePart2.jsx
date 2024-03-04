import { Card } from '@mui/material'
import React from 'react'
import image1 from "../../../ExternalComponents/Images/black-garlic-oil.png"
import image2 from "../../../ExternalComponents/Images/yellowtoothpaste.png"
import image3 from "../../../ExternalComponents/Images/charcoaltoothpaste.png"
import { Link } from 'react-router-dom'

function HomePart2() {

  return (
    <>
    <div className="flex flex-wrap justify-center mt-5">

          {/* left side */}
          <Link to={''}>
            <div className="flex bg-purple-100 hover:bg-purple-200 m-3 rounded-3xl p-10 items-center">
                  <div className="">
                    <p className='bg-pink-900 text-white w-20 text-center rounded-lg p-1'>25% OFF</p>
                    <p className='text-2xl font-bold'>BLACK GARLIC OIL</p>
                    <p className='text-lg'>Stronger and Thicker<br/>Hair With Black Garlic<br/>Oil.</p>
                    <p className='font-thin line-through'>$39.00</p>
                    <p className='font-semibold'>$37.00 <span className='font-thin'>Including Tax</span></p>
                  </div>

                  <div className="">
                    <img src={image1} alt="" className='w-[72vh]' />
                  </div>
            </div>
          </Link>
          {/* left side end */}


          {/* right side */}
            <div className="">

                  {/* top */}
                  <Link to={''}>
                    <div className="flex bg-pink-100 hover:bg-pink-200 m-3 rounded-3xl p-10 items-center">

                      <div className="">
                        <p className='bg-pink-900 text-white w-20 text-center rounded-lg p-1'>25% OFF</p>
                        <p className='text-xl'>Dental Care Set for Vivid<br/>and Bright Smiles</p>
                        <p className='font-thin line-through'>$33.90</p>
                        <p className='font-semibold'>$22.90 <span className='font-thin'>Including Tax</span></p>
                      </div>

                      <div className="">
                        <img src={image2} alt="" className='w-[30vh]' />
                      </div>
                      
                    </div>
                  </Link>
                  {/* top end */}

                  {/* bottom */}
                  <Link to={''}>
                    <div className="flex bg-blue-100 hover:bg-blue-200 m-3 rounded-3xl p-10 items-center">

                      <div className="">
                        <p className='bg-pink-900 text-white w-20 text-center rounded-lg p-1'>25% OFF</p>
                        <p className='text-xl'>BANANA FLAVOURED<br/>TOOTHPASTE</p>
                        <p className='font-thin line-through'>$39.90</p>
                        <p className='font-semibold'>$37.90 <span className='font-thin'>Including Tax</span></p>
                      </div>

                      <div className="">
                        <img src={image3} alt="" className='w-[30vh]' />
                      </div>

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
