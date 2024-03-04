import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function UserLayout() {
  return (
    <>
    <div className="h-[100vh]">

      <div className="fixed w-full">
        <Header/>
      </div>

    <div className="pt-20">
      <Outlet/>
    </div>

    <Footer/>
    </div>
    </>
  )
}

export default UserLayout
