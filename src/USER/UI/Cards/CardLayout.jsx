import React from 'react'
import { useParams } from 'react-router-dom'

function CardLayout() {
    const { cardlayout } = useParams()
  return (
    <>
    {cardlayout}
    </>
  )
}

export default CardLayout
