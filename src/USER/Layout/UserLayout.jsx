import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Chat from '../Chat/Chat'

function UserLayout() {
  return (
    <>
    <div className="h-[100vh] w-[100%] m-auto">

      <div className="fixed w-full">
        <Header/>
      </div>

    <div className="pt-24">
      <Outlet/>
    </div>

   <div className="fixed right-0 bottom-0 ">
   <Chat/>
   </div>

    <Footer/>
    </div>
    </>
  )
}

export default UserLayout
