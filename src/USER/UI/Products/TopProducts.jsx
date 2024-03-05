import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function TopProducts() {

    const TopProducts = [
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
            prdctName:"Non-rebreather mask",
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
            <h1 className='text-2xl sm:text-4xl font-semibold'>Top Products</h1>
        </div>
        <div className="text-right mr-10">
            <Link to={''}><button className='text-pink-900 sm:text-xl font-mono'>View All <i class="fa-solid fa-arrow-right"></i></button></Link>
        </div>
    
    {/* Top Products start */}
    
    <div className="flex flex-wrap gap-2 justify-center">
            {
                TopProducts.map((item)=>{
                    return(
                        <>
                        <Card className='border w-[130px] sm:w-[250px] h-fit m-5'>
                            <Link to={`/products/${item.prdct_id}`}>
                                <div className="bg-slate-500">
                                    <img className='' src={item.image} alt="Loading..." />
                                </div>
                                <div className="border p-4">
                                    <p className='text-xs sm:text-xl font-bold'>{item.prdctName}</p>
                                    <p className='text-xs sm:text-base'>{item.price}</p>
                                </div>
                            </Link>
                            <div className="">
                                <button className='bg-pink-900 text-white text-xs sm:text-base rounded w-full py-2'>Add to Cart <i class="fa-solid fa-bag-shopping"></i></button>
                            </div>
                        </Card>
                        </>
                    )
                })
            }
        </div>

    {/* Top Products end */}
    </>
  )
}

export default TopProducts
