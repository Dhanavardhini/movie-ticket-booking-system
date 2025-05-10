import React from 'react'
import "./userlanding.css"
import { Link } from 'react-router-dom'
function Userlanding() {
  return (
    <>
    <div className="user1-main">
    <nav className="navbar-user">
        <div className="navbar-container">
            <div className="logo">Movie Booking</div>
            <ul className="nav-links">
               <li><a href="#">Home</a></li>
               
                <Link to={"/mybooking"}><li><a href="#">My booking</a></li></Link>
                <Link to={"/userlogin"}><li><a href="#">Logout</a></li></Link>
            </ul>
        </div>
    </nav>

    <div className="hero-image1">
        <div className="hero-text">
            <h1>Book Any Show</h1>
            <p>Feel the magic of movies - book your tickets today!</p>
            <Link to={"/booktwo"}><a href="#" class="cta-button">Kids</a>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to={"/bookfour"}><a href="#" class="cta-button">Horror</a>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link to={"/bookaction"}><a href="#" class="cta-button">Action</a></Link>
        </div>
    </div>

    <footer className="footer">
        <div className="footer-container">
            <p>&copy; 2023 Book My Show. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Userlanding