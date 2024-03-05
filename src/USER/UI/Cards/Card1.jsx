import React from 'react'
import { Link } from 'react-router-dom'

function Card1() {
  return (
    <>
    <div className="flex flex-wrap justify-evenly my-5">
          <Link to={`/cards/${'off'}`}>
            <div className="bg-slate-200 hover:bg-slate-300 flex gap-2 justify-around sm:text-2xl text-base p-5 rounded-3xl items-center m-2">
              <i class="fa-solid fa-circle-exclamation"></i>
              <p>Get 25%<br/>OFF</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </Link>

          <Link to={`/cards/${'delivery'}`}>
            <div className="bg-red-100 hover:bg-red-200 flex justify-around sm:text-2xl text-base p-5 rounded-3xl items-center gap-2 m-2">
              <i class="fa-solid fa-truck"></i>
              <p>Free Home<br/>Delivery</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </Link>

          <Link to={`/cards/${'appointment'}`}>
            <div className="bg-orange-100 hover:bg-orange-200 flex justify-around sm:text-2xl text-base p-5 rounded-3xl items-center gap-2 m-2">
              <i class="fa-solid fa-user-doctor"></i>
              <p>Doctor's<br/>Appointement</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </Link>
          
          <Link to={`/cards/${'advice'}`}>
            <div className="bg-lime-100 hover:bg-lime-200 flex justify-around sm:text-2xl text-base p-5 rounded-3xl items-center gap-2 m-2">
              <i class="fa-solid fa-stethoscope"></i>
              <p>Health<br/>Advice</p>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </Link>
    </div>
    </>
  )
}

export default Card1
