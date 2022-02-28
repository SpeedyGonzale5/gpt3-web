import React from 'react'
import {RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import "./navbar.css";
import logo from '../../assets/logo.svg'

// BEM -< Block Element Modifier
 const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
<div className='gpt3__navbar-links_logo'>
  <img src= {logo} alt="logo"></img>
</div>
<div className='gpt3__navbar-links_container'>
  
</div>
        </div>
        </div>
  )
}

export default Navbar;