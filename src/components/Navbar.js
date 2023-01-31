import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <section className="header"> 
    <nav className="navbar">
        <Link to="/" className="title">Cocktails</Link>

        <ul className="lists">
            <li className="list">
                <Link  to="/about">About Us</Link>
            </li>
            <li className="list">
            <Link to={`/cocktails`}>Cocktails</Link>
            </li>
        </ul>

    </nav>
</section>
  )
}



export default Navbar