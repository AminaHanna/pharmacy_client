import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Chat from '../Chat/Chat'

function UserLayout() {
  const [ tokenState, setTokenState ] = useState(Boolean(localStorage.getItem("token")));

  const navigate = useNavigate();
  useEffect(() => {
    if(!tokenState) {
      navigate('/user-signin')
    }
  }, [navigate, tokenState]);



  return (
    <>
    {
      tokenState?

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

      :

      navigate('user-signin')

    }
    </>
  )
}

export default UserLayout
