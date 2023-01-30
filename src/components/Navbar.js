import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <section className="header"> 
    <nav className="navbar">
        <Link to={`/`} className="title">Cocktails</Link>

        <ul className="lists">
            <li className="list">
                <Link to={`/contact`}>Contact</Link>
            </li>
            <li className="list">
                <a href="./Navbar.js">About Us</a>
            </li>
            <li className="list">
            <Link to={`/cocktails`}>Cocktails</Link>
            </li>
        </ul>

        <div className="icons">
            <div className="icon">

                <i className="fas fa-user fa-3x"></i>
                  
            </div>
        </div>
    </nav>
</section>
  )
}



export default Navbar