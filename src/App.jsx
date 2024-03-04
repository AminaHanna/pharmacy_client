import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import UserLayout from './USER/Layout/UserLayout'
import UserSignUp from './USER/SignUp/UserSignUp'
import UserSignIn from './USER/SignIn/UserSignIn'
import AdminSignUp from './ADMIN/SignUp/AdminSignUp'
import AdminSignIn from './ADMIN/SignIn/AdminSignIn'
import UserHome from './USER/Home/UserHome'
import StartShopping from './USER/UI/Shopping/StartShopping'
import CategoriesLayout from './USER/UI/Categories/CategoriesLayout'
import CardLayout from './USER/UI/Cards/CardLayout'
import ProductDetails from './USER/UI/Products/ProductDetails'
import EmptyCart from './USER/UI/Shopping/Cart/EmptyCart'
import EmptyWishlist from './USER/UI/Shopping/Wishlist/EmptyWishlist'
import EmptyOrders from './USER/UI/Shopping/Orders/EmptyOrders'
import Cart from './USER/UI/Shopping/Cart/Cart'
import Whishlist from './USER/UI/Shopping/Wishlist/Whishlist'
import Orders from './USER/UI/Shopping/Orders/Orders'
import Payment from './USER/UI/Shopping/Payment/Payment'
import Address from './USER/UI/Shopping/Payment/Address'
import AdminLayout from './ADMIN/Layout/AdminLayout'

function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <UserLayout/>,
      children: [
        {
          path: "",
          element: <UserHome/>
        },
        {
          path: 'shopping/:page',
          element: <CategoriesLayout/>
        },
        {
          path:"start-shopping",
          element: <StartShopping/>,
        },
        {
          path: "cards/:cardlayout",
          element: <CardLayout/>
        },
        {
          path: "products/:prdctlayout",
          element: <ProductDetails/>
        },
        {
          path: "cart",
          element: <Cart/>
        },
        {
          path: "wishlist",
          element: <Whishlist/>
        },
        {
          path: "order",
          element: <Orders/>
        },
        {
          path: "cart-empty",
          element: <EmptyCart/>
        },
        {
          path: "wishlist-empty",
          element: <EmptyWishlist/>
        },
        {
          path: "order-empty",
          element: <EmptyOrders/>
        },
        {
          path: "shipping-address",
          element: <Address/>
        },
        {
          path: "payment",
          element: <Payment/>
        },
      ]
    },


    {
      path: "/admin",
      element: <AdminLayout/>,
      children: [
        {
          path:"product",
          element: <ProductDetails/>
        }
      ]
    },


    {
      path: "/user-signup",
      element: <UserSignUp/>
    },
    {
      path: "/user-signin",
      element: <UserSignIn/>
    },


    {
      path: "/admin-signup",
      element: <AdminSignUp/>
    },
    {
      path:"/admin-signin",
      element: <AdminSignIn/>
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
