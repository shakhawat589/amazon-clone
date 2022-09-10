import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img
      className="header__logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      alt="Logo"
      />
      <div className="header__search">
      </div>      
    </div>
  )
}

export default Header