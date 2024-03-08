import React from 'react'
import { Link } from 'react-router-dom'

function ViewCards() {

    const Cards = [
        {
          offer_title: "Card 1",
          offer_description: "description about it......"
        },
        {
          offer_title: "Card 2",
          offer_description: "description about it......"
        },
        {
          offer_title: "Card 3",
          offer_description: "description about it......"
        }
      ]
    

  return (
    <>
    <div className="flex flex-wrap justify-center">
      {
        Cards.map((item)=>{
          return(
          <>
          <div className="flex flex-col justify-between items-center m-5 p-5 w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] border border-slate-400 shadow-md shadow-slate-600 rounded-lg">

          <div className="">
            <p className='text-base sm:text-lg'>{item.offer_title}</p>
            <p className='text-xs sm:text-base'>{item.offer_description}</p>
          </div>

          <div className=" flex gap-3">
            <Link to={'/admin/offer-cards/edit-cards'}><button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base rounded'>Edit</button></Link>
            <button  className='border border-pink-900 px-3 py-1 my-2 hover:bg-pink-900 hover:text-white text-xs sm:text-base'>Delete</button>
          </div>
         
          </div>
          </>
          )
        })
      }
    </div>
    </>
  )
}

export default ViewCards
