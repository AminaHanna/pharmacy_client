import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {

  return (
    <>
     {/* header-start */}
     <div className="flex flex-wrap gap-3 justify-between p-4 text-pink-900">

          <Link to={`/shopping/${'pain-releif'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Pain Relief</p>
          </Link>

          <Link to={`/shopping/${'coldandflu'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Cold and Flu</p>
          </Link>

          <Link to={`/shopping/${'diabetes'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Diabetes Care</p>
          </Link>

          <Link to={`/shopping/${'digestive-health'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Digestive Health</p>
          </Link>

          <Link to={`/shopping/${'firstaid'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>First Aid</p>
          </Link>

          <Link to={`/shopping/${'skincare'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Skin Care</p>
          </Link>

          <Link to={`/shopping/${'child-babycare'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Child and Baby Care</p>
          </Link>

          <Link to={`/shopping/${'heart-health'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Heart Health</p>
          </Link>

          <Link to={`/shopping/${'eye-earcare'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Eye and Ear Care</p>
          </Link>

          <Link to={`/shopping/${'respiratory-health'}`} className='hover:bg-slate-100 p-2 rounded-lg'>
            <p>Respiratory Health</p>
          </Link>

        </div>
        {/* header-end */}

    </>
  )
}

export default Categories
