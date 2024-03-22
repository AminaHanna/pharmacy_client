import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-pink-900 text-white">

        <div className="grid sm:flex gap-3 sm:flex-wrap p-5 justify-around">

          <div className="">
              <p className='sm:text-xl'>Contact</p>
              <p className='text-xs sm:text-base'>123 Road,Calicut</p>
              <p className='text-xs sm:text-base'>+91 9990001230</p>
              <p className='text-xs sm:text-base'>me@gmail.com</p>
          </div>


          <div className="">
              <p className='sm:text-xl'>Quick Links</p>
              <a href="#"><p className='text-xs sm:text-base'>Home</p></a>
              <Link to={''}><p className='text-xs sm:text-base'>About</p></Link>
              <Link to={'cart'}><p className='text-xs sm:text-base'>Cart</p></Link>
              <Link to={'order'}><p className='text-xs sm:text-base'>Orders</p></Link>
          </div>


          <div className="">
              <p className='sm:text-xl'>Specialities</p>
              <p className='text-xs sm:text-base'>Anesthesiology</p>
              <p className='text-xs sm:text-base'>Phychiatry</p>
              <p className='text-xs sm:text-base'>General Surgery</p>
              <p className='text-xs sm:text-base'>Family Medicine</p>
              <p className='text-xs sm:text-base'>Pediatrics</p>
          </div>


          <div className="">
              <p className='sm:text-xl'>Services</p>
              <p className='text-xs sm:text-base'>Medical</p>
              <p className='text-xs sm:text-base'>Operation</p>
              <p className='text-xs sm:text-base'>Laboratory</p>
              <p className='text-xs sm:text-base'>ICU</p>
              <p className='text-xs sm:text-base'>Patient Ward</p>
          </div>


          <div className="">
              <p className='sm:text-xl'>Social Media</p>
                <div className="flex gap-5 mt-5">
                  <button className='text-xs sm:text-base'><i class="fa-solid fa-house"></i></button>
                  <button className='text-xs sm:text-base'><i class="fa-solid fa-user"></i></button>
                  <button className='text-xs sm:text-base'><i class="fa-brands fa-github"></i></button>
                  <button className='text-xs sm:text-base'><i class="fa-brands fa-facebook"></i></button>
                </div>
          </div>

        </div>



        <div className="grid sm:flex justify-around font-mono bg-pink-900 pb-5">
          <Link to={''}><p className='text-xs sm:text-base'>2024 HEALTHY.All rights reserved.</p></Link>
          <Link to={''}><p className='text-xs sm:text-base'>Terms and Conditions</p></Link>
        </div>

      </footer>
    </>
  )
}

export default Footer
