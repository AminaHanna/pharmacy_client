import React from 'react'
import img from "../../../ExternalComponents/Images/pillsss.png"
import img1 from "../../../ExternalComponents/Images/first-aid-kit.png"
import img2 from "../../../ExternalComponents/Images/medicine-jar.png"
import img3 from "../../../ExternalComponents/Images/tablets.png"


function HomePart4() {

    const title_blog = 'In this various aspeaspects of health   '
  return (
    <>
    <p className='text-2xl sm:text-4xl font-medium text-center mt-10'>Our Latest News & Blogs</p>
    <div className="flex flex-wrap justify-center m-2">


    {/* left */}
        <div className="bg-red-50 px-10 py-2 rounded-lg flex flex-col items-center justify-center">
            <div className="">
                <img src={img} alt="" width="300px" />
            </div>
            <div className="mt-8">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-pink-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>24 Dec, 2023</p>
                </div>
                <div className="">
                    <p className='text-lg sm:text-3xl'>{title_blog.length > 33 ? title_blog.slice(0,33) + '...' : title_blog }</p>
                    <p className='sm:text-base text-xs'>Explore the world of medical specialities through our blog's spotlight<br/>feature.From cardiology to pediatrics, we share in-depth articles written<br/>by our expert physicians.</p>
                    <button className='bg-pink-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                </div>
            </div>
        </div>
    {/* left end */}


    {/* right */}

    <div className="">
        {/* right-1 */}
        <div className="flex sm:flex-row flex-col items-center bg-gray-100 rounded-xl m-2 p-5 gap-1">
            <div className="">
                <img src={img1} alt="" width="150px" />
            </div>
            <div className="">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-pink-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>24 Dec, 2023</p>
                </div>
                <div className="">
                    <p className='text-lg sm:text-3xl font-medium'>Discover a treasure trove of practical tips<br/>for enhancing</p>
                    <p className='sm:text-base text-xs'>From nutrition advice to exercise routines,we're<br/>here to support your journey toward a healtheier</p>
                    <button className='bg-pink-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                </div>
            </div>
        </div>
        {/* right-2 */}
        <div className="flex sm:flex-row flex-col items-center bg-pink-50 rounded-xl m-2 p-5 gap-1">
            <div className="">
                <img src={img2} alt="" width="150px" />
            </div>
            <div className="">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-pink-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>24 Dec, 2023</p>
                </div>
                <div className="">
                    <p className='text-lg sm:text-3xl font-medium'>Our patients' journeys are filled with<br/>courage,resilience,and triumph.</p>
                    <p className='sm:text-base text-xs'>In this section,we share inspiring narratives of<br/>individuals who have overcome health challenges.</p>
                    <button className='bg-pink-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                </div>
            </div>
        </div>
        {/* right-3 */}
        <div className="flex sm:flex-row flex-col items-center bg-red-50 rounded-xl m-2 p-5 gap-1">
            <div className="">
                <img src={img3} alt="" width="150px" />
            </div>
            <div className="">
                <div className="flex gap-5">
                    <p className='p-1 text-sm bg-pink-800 rounded text-white'>Doctor</p>
                    <p className='sm:font-medium p-1'>24 Dec, 2023</p>
                </div>
                <div className="">
                    <p className='text-lg sm:text-3xl font-medium'>From organizing health fair to<br/>partnering with local organizations</p>
                    <p className='sm:text-base text-xs'>Find out how you can participate in community<br/>events and contribute to the health.</p>
                    <button className='bg-pink-800 text-xs sm:text-base text-white px-2 py-1 rounded-md mt-2 hover:bg-slate-300'>Read More</button>
                </div>
            </div>
        </div>

    </div>

    {/* right end */}


    </div>
    </>
  )
}

export default HomePart4
