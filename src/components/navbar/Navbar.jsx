import React, {useState} from 'react'
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
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
</div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type="button">Sign up</button>
        </div>
        <div className='gpt3__navbar-menu'></div>
        </div>
  )
}

export default Navbar;