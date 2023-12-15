import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './CarButton.css'


const CarButton = () => {
  return (
    <button type='button' className='car__button'>
        <FaCartShopping />
        <span className='car-status'>1</span>
    </button>
  )
}

export default CarButton