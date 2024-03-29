import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function UpcomingProducts() {

    const UpcomingProducts = [
        {
            image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
            prdctName:"Foley Catheter",
            price:"$12.90",
            prdct_id:"1st prdct"
        },
        {
            image:"https://img.lovepik.com/free-png/20211216/lovepik-hand-drawn-thermometer-png-image_401695408_wh1200.png",
            prdctName:"Thermometer",
            price:"$8.90",
            prdct_id:"2nd prdct"
        },
        {
            image:"https://www.oxyaider.co.za/wp-content/uploads/2021/11/Made-of-medical-grade-PVC-.-1.png",
            prdctName:"Mask",
            price:"$12.90",
            prdct_id:"3rd prdct"
        },
        {
            image:"https://static.vecteezy.com/system/resources/previews/024/286/063/non_2x/wound-dressing-plaster-free-png.png",
            prdctName:"Wound Dressing",
            price:"$24.90",
            prdct_id:"4th prdct"
        }
    ]

  return (
    <>
    <div className="p-5 mx-16 mt-5">
        <h1 className='text-2xl sm:text-4xl font-semibold'>Upcoming Products</h1>
    </div>
    <div className="text-right mr-10">
        <Link to={''}><button className='text-pink-900 sm:text-xl font-mono'>View All <i class="fa-solid fa-arrow-right"></i></button></Link>
    </div>
    
    {/* Upcoming Products start */}
    
    <div className="flex flex-wrap justify-center">
            {
                UpcomingProducts.map((item)=>{
                    return(
                        <>
                        <Card className='border w-[130px] sm:w-[250px] h-fit m-5'>
                            <Link to={`/products/${item.prdct_id}`}>
                                <div className="bg-slate-500">
                                    <img className='' src={item.image} alt="Loading..." />
                                </div>
                            </Link>
                                <div className="border p-2">
                                    <div className="flex justify-between">
                                        <p className='text-xs sm:text-xl font-bold'>{item.prdctName}</p>
                                        <button className='text-pink-900 sm:text-xl'><i class="fa-regular fa-heart"></i></button>
                                    </div>
                                </div>
                        </Card>
                        </>
                    )
                })
            }
        </div>

    {/* Upcoming Products end */}
    </>
  )
}

export default UpcomingProducts
