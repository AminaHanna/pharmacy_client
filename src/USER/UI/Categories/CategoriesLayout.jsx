import React from 'react'
import { useParams } from 'react-router-dom'

function CategoriesLayout() {

  const { page } = useParams()
  // console.log(page);

  return (
    <>
    { page }
    </>
  )
}

export default CategoriesLayout
