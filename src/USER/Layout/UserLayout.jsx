import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function UserLayout() {
  return (
    <>
    <div className="h-[100vh] w-[100%] m-auto">

      <div className="fixed w-full">
        <Header/>
      </div>

    <div className="sm:pt-24 pt-52">
      <Outlet/>
    </div>

    <Footer/>
    </div>
    </>
  )
}

export default UserLayout
