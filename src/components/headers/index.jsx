import React, { useState } from 'react'
import './header.css'
import logo from '../assets/logo.png'
import Pooja_booking from '../pooja booking'
import Dalal_booking from '../dalal booking'
import Vedic_calender from '../vedic calender'
import Taboption from '../taboptions'

const getscreen =(tab)=>{
  switch(tab) {
    case "Book a Priest":
      return <Pooja_booking />
    case "VIP Guide Priest":
      return <Dalal_booking />
    case "Vedic Calender":
      return <Vedic_calender />
    default:
      return <Pooja_booking />
  }
}

const Navbar = () => {
  const [activetab, setactivetab] = useState()
  return (
    <><div className='max-width header'>
      <img src={logo} alt='hlogo' className='header-logo' />
      <div className='header-right'>
        <div className='header-location-search-container'>
          <div className='location-wrapper'>
            <div className='location-icon-name'>
              <i className='fa-solid fa-location-crosshairs absolute-center location-icon'></i>
              <div>kolkata</div>
            </div>
            <i className='fa-solid fa-caret-down absolute-center'></i>
          </div>
          <div className='location-search-separator'></div>
          <div className='header-searchbar'>
            <i className='fa-solid fa-magnifying-glass absolute-center search-icon'></i>
            <input placeholder='search for pooja,religion or place' className='search-input' />
          </div>
        </div>
        <div className='profile-wrapper'>
          <i className='fa-solid fa-user-large header-profile-image'></i>
          <div className='header-username'>rajdeep</div>
          <i className='fa-solid fa-angle-down absolute-center profile-option-icon'></i>
        </div>
      </div>
    </div>
    <Taboption activetab={activetab} setactivetab={setactivetab} />
      {getscreen(activetab)}
    </>
  )
}

export default Navbar
