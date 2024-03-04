import React from 'react'
import HomePart1 from '../UI/HomePages/HomePart1'
import HomePart2 from '../UI/HomePages/HomePart2'
import Card1 from '../UI/Cards/Card1'
import NewProducts from '../UI/Products/NewProducts'
import PopularProducts from '../UI/Products/PopularProducts'
import TopProducts from '../UI/Products/TopProducts'
import MedicalProducts from '../UI/Products/MedicalProducts'
import UpcomingProducts from '../UI/Products/UpcomingProducts'
import Card2 from '../UI/Cards/Card2'
import Categories from '../UI/Categories/Categories'
import HomePart3 from '../UI/HomePages/HomePart3'
import HomePart4 from '../UI/HomePages/HomePart4'

function UserHome() {
  return (
    <>
    <Categories/>
    <HomePart1/>
    <Card1/>
    <NewProducts/>
    <PopularProducts/>
    <HomePart2/>
    <TopProducts/>
    <Card2/>
    <MedicalProducts/>
    <UpcomingProducts/>
    <HomePart3/>
    <HomePart4/>
    </>
  )
}

export default UserHome
