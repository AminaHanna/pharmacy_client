import { Card } from '@mui/material'
import React from 'react'
import NewProducts from '../Products/NewProducts'
import TopProducts from '../Products/TopProducts'
import PopularProducts from '../Products/PopularProducts'
import MedicalProducts from '../Products/MedicalProducts'
import UpcomingProducts from '../Products/UpcomingProducts'

function StartShopping() {
    

    const Shopping = [
        {
            image:"https://png.pngtree.com/png-clipart/20230801/original/pngtree-urinary-cathetericon-color-flat-catheter-picture-image_7813016.png",
            prdctName:"Foley Catheter",
            price:"$12.90"
        },
        {
            image:"https://img.lovepik.com/free-png/20211216/lovepik-hand-drawn-thermometer-png-image_401695408_wh1200.png",
            prdctName:"Thermometer",
            price:"$8.90"
        },
        {
            image:"https://www.oxyaider.co.za/wp-content/uploads/2021/11/Made-of-medical-grade-PVC-.-1.png",
            prdctName:"Non-rebreather mask",
            price:"$12.90"
        },
        {
            image:"https://static.vecteezy.com/system/resources/previews/024/286/063/non_2x/wound-dressing-plaster-free-png.png",
            prdctName:"Wound Dressing",
            price:"$24.90"
        }
    ]

    
  return (
    <>
        <div className="flex flex-wrap justify-center">
            {
                Shopping.map((item)=>{
                    return(
                        <>
                        <Card className='border w-[280px] h-fit m-5'>
                            <div className="bg-slate-500">
                                <img className='' src={item.image} alt="Loading..." />
                            </div>
                            <div className="border p-4">
                                <p className='text-xl font-bold'>{item.prdctName}</p>
                                <p>{item.price}</p>
                            </div>
                            <div className="">
                                <button className='bg-pink-900 text-white rounded w-full py-2'>Add to Cart</button>
                            </div>
                        </Card>
                        </>
                    )
                })
            }
        </div>



        {/* cndtn kodthtt ellum sort cheyynm rate ,products or quality ike that  */}

        {/* <NewProducts/>
        <TopProducts/>
        <PopularProducts/>
        <MedicalProducts/>
        <UpcomingProducts/> */}
    </>
  )
}

export default StartShopping
