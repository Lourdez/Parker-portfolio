import React from 'react'
import "../Components/style/navbar.css"
import logo from '../../src/assets/logo2.png'
import contactimg from '../../src/assets/contact-me.png'
import { Link, link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />

      <div className="desktopmenu">
        <Link className="desktopmenuitems">Home</Link>
        <Link className="desktopmenuitems">Client</Link>
        <Link className="desktopmenuitems">About</Link>
        <Link className="desktopmenuitems">portfolio</Link>
      </div>
      <button className="desktopmenubutton">
        <img src={contactimg} alt="" className="desktopmenuimg" />Contact Me
      </button>
    </nav>
  )
}

export default Navbar