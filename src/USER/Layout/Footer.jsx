import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-pink-900 text-white">

        <div className="flex flex-wrap p-5 justify-around">

          <div className="">
              <p className='text-xl'>Contact</p>
              <p>123 Road,Calicut</p>
              <p>+91 9990001230</p>
              <p>me@gmail.com</p>
          </div>


          <div className="">
              <p className='text-xl'>Quick Links</p>
              <Link to={''}><p>Home</p></Link>
              <Link to={''}><p>About</p></Link>
              <Link to={''}><p>Cart</p></Link>
              <Link to={''}><p>Orders</p></Link>
          </div>


          <div className="">
              <p className='text-xl'>Specialities</p>
              <p>Anesthesiology</p>
              <p>Phychiatry</p>
              <p>General Surgery</p>
              <p>Family Medicine</p>
              <p>Pediatrics</p>
          </div>


          <div className="">
              <p className='text-xl'>Services</p>
              <p>Medical</p>
              <p>Operation</p>
              <p>Laboratory</p>
              <p>ICU</p>
              <p>Patient Ward</p>
          </div>


          <div className="">
              <p className='text-xl'>Social Media</p>
                <div className="flex gap-5 mt-5">
                  <button><i class="fa-solid fa-house"></i></button>
                  <button><i class="fa-solid fa-user"></i></button>
                  <button><i class="fa-brands fa-github"></i></button>
                  <button><i class="fa-brands fa-facebook"></i></button>
                </div>
          </div>

        </div>



        <div className="flex justify-around font-mono bg-pink-900 pb-5">
          <Link to={''}><p>2024 HEALTHY.All rights reserved.</p></Link>
          <Link to={''}><p>Terms and Conditions</p></Link>
        </div>

      </footer>
    </>
  )
}

export default Footer
