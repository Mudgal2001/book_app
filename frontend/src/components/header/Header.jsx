import React from 'react'
import App from '../../App'
import "./header.css"
const Header = () => {
  return (
    <div className="navbar">
        <div className="navbarItems">
          <img  src="./logo-black.png" alt="logo" />
        </div>
        <div className="navbarItems centerItem">
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li> Blog</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className="navbarItems">
            <button className="btn">Sign Up</button>
        </div>
    </div>

  )
}

export default Header