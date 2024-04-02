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
import EmailManagement from './ADMIN/Pages/Mail/EmailManagement'
import OrderManagement from './ADMIN/Pages/Orders/OrderManagement'
import SingleOrders from './ADMIN/Pages/Orders/SingleOrders'
import OrderSearch from './ADMIN/Pages/Orders/OrderSearch'
import AdminHome from './ADMIN/Home/AdminHome'
import AdminProfile from './ADMIN/Pages/Profile/AdminProfile'
import ProductAdd from './ADMIN/Pages/Products/ProductAdd'
import Chat from './USER/Chat/Chat'
import ProductEdit from './ADMIN/Pages/Products/ProductEdit'
import Products from './ADMIN/Pages/Products/Products'
import Categories from './ADMIN/Pages/Categories/Categories'
import ViewCategories from './ADMIN/Pages/Categories/ViewCategories'
import EditCategories from './ADMIN/Pages/Categories/EditCategories'
import AddCategories from './ADMIN/Pages/Categories/AddCategories'
import ProductView from './ADMIN/Pages/Products/ProductView'
import OrderLayout from './ADMIN/Pages/Orders/OrderLayout'
import New from './ADMIN/Pages/Orders/New'
import Processing from './ADMIN/Pages/Orders/Processing'
import Shipped from './ADMIN/Pages/Orders/Shipped'
import Cancelled from './ADMIN/Pages/Orders/Cancelled'
import UserManagement from './ADMIN/Pages/Users/UserManagement'
import OfferCards from './ADMIN/Pages/OfferCards/OfferCards'
import ViewCards from './ADMIN/Pages/OfferCards/ViewCards'
import EditCards from './ADMIN/Pages/OfferCards/EditCards'
import AddCards from './ADMIN/Pages/OfferCards/AddCards'
import Blogs from './ADMIN/Pages/Blogs/Blogs'
import ViewBlogs from './ADMIN/Pages/Blogs/ViewBlogs'
import EditBlogs from './ADMIN/Pages/Blogs/EditBlogs'
import AddBlogs from './ADMIN/Pages/Blogs/AddBlogs'
import UpdateProfile from './ADMIN/Pages/Profile/UpdateProfile'
import Account from './USER/Account/Account'
import Loadd from './USER/Loading/Loadd'
import BannerLayout from './ADMIN/Pages/Banner/BannerLayout'
import BannerPreview from './ADMIN/Pages/Banner/BannerPreview'
import Banner1Add from './ADMIN/Pages/Banner/Banner1/Banner1Add'
import Banner2Add from './ADMIN/Pages/Banner/Banner2/Banner2Add'
import Banner3Add from './ADMIN/Pages/Banner/Banner3/Banner3Add'
import AllNewProducts from './USER/UI/ViewAll/AllNewProducts'
import AllPopular from './USER/UI/ViewAll/AllPopular'
import AllTop from './USER/UI/ViewAll/AllTop'
import AllMedical from './USER/UI/ViewAll/AllMedical'
import AllUpcoming from './USER/UI/ViewAll/AllUpcoming'
import HomePage4_1More from './USER/UI/HomePages/Home4/HomePage4More'
import HomePage4_2More from './USER/UI/HomePages/Home4/HomePage4_2More'
import HomePage4_3More from './USER/UI/HomePages/Home4/HomePage4_3More'
import HomePage4_4More from './USER/UI/HomePages/Home4/HomePage4_4More'
import Succesfull from './USER/UI/Shopping/Payment/Succesfull'
import UserOrders from './ADMIN/Pages/Orders/OrdersOfUsers'
import Address2 from './USER/UI/Shopping/Payment/Address2'



function App() {
  const router = createBrowserRouter ([
    {
      path: "/",
      element: <UserLayout/>,
      children: [
        // {
        //   path:"",
        //   element: <Loadd/>
        // },
        {
          path: "",
          element: <UserHome/>
        },
        {
          path: "account",
          element: <Account/>
        },
        {
          path: "chat",
          element: <Chat/>
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
          path: "shipping-address/:id",
          element: <Address/>
        },
        {
          path: "shipping-addresss",
          element: <Address2/>
        },  
        {
          path: "payment",
          element: <Payment/>
        },
        {
          path: "successfull",
          element: <Succesfull/>
        },
        {
          path: "new-products",
          element: <AllNewProducts/>
        },
        {
          path: "popular-products",
          element: <AllPopular/>
        },
        {
          path: "top-products",
          element: <AllTop/>
        },
        {
          path: "medical-products",
          element: <AllMedical/>
        },
        {
          path: "upcoming-products",
          element: <AllUpcoming/>
        },
        {
          path:"read1more",
          element: <HomePage4_1More/>
        },
        {
          path:"read2more",
          element: <HomePage4_2More/>
        },
        {
          path:"read3more",
          element: <HomePage4_3More/>
        },
        {
          path:"read4more",
          element: <HomePage4_4More/>
        }
      ]
    },

    
   
    


    {
      path: "/admin",
      element: <AdminLayout/>,
      children: [
        {
          path:"",
          element: <AdminHome/>
        },
        {
          path:"profile",
          element: <AdminProfile/>,
          children: [
            {
              path: "update",
              element: <UpdateProfile/>
            }
          ]
        },
        {
          path: "banner",
          element: <BannerLayout/>,
          children: [
            {
              path: "",
              element: <BannerPreview/>
            },
            {
              path: "banner1-add",
              element: <Banner1Add/>
            },
            {
              path: "banner2-add",
              element: <Banner2Add/>
            },
            {
              path: "banner3-add",
              element: <Banner3Add/>
            },
          ]
        },
        {
          path:"email",
          element: <EmailManagement/>
        },
        {
          path: "users",
          element: <UserManagement/>
        },
        {
          path: "orders",
          element: <OrderLayout/>,
          children: [
            {
              path: "",
              element: <OrderManagement/>
            },
            {
              path: "user/:id",
              element: <UserOrders/>
            },
            {
              path: "all",
              element: <OrderManagement/>
            },
            {
              path: "new",
              element: <New/>
            },
            {
              path: "Processing",
              element: <Processing/>
            },
            {
              path: "shipped",
              element: <Shipped/>
            },
            {
              path: "cancelled",
              element: <Cancelled/>
            },
            {
              path: "search",
              element: <OrderSearch/>
            }
          ]
        },
        {
          path: "single-orders",
          element: <SingleOrders/>
        },
        {
          path: "products",
          element: <Products/>,
          children: [
            {
              path: "",
              element: <ProductView/>
            },
            {
              path: "edit-product/:id",
              element: <ProductEdit/>
            },
            {
              path: "add-product",
              element: <ProductAdd/>
            }
          ]
        },
        {
          path: "categories",
          element: <Categories/>,
          children: [
            {
              path: "",
              element:<ViewCategories/>
            },
            {
              path:"edit-category/:id",
              element : <EditCategories/>
            },
            {
              path:"add-category",
              element : <AddCategories/>
            }
          ]
        },
        {
          path: "offer-cards",
          element: <OfferCards/>,
          children: [
            {
              path: "",
              element:<ViewCards/>
            },
            {
              path:"edit-cards/:id",
              element : <EditCards/>
            },
            {
              path:"add-cards",
              element : <AddCards/>
            }
          ]
        },
        {
          path: "blogs",
          element: <Blogs/>,
          children: [
            {
              path: "",
              element: <ViewBlogs/>
            },
            {
              path:"edit-blog/:id",
              element : <EditBlogs/>
            },
            {
              path:"add-blog",
              element : <AddBlogs/>
            }
          ]
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
