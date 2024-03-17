import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='max-width header'>
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
            <input placeholder='search for pooja,religion or place' className='search-input'/>
          </div>
        </div>
        <div className='profile-wrapper'>
          <i className='fa-solid fa-user-large header-profile-image'></i>
          <div className='header-username'>rajdeep</div>
          <i className='fa-solid fa-angle-down absolute-center profile-option-icon'></i>
        </div>
      </div>
    </div>
  )
}

export default Header
