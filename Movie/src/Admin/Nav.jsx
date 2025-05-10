

import React from 'react';
import './Nav.css';
import { MdDashboard, MdTwoWheeler } from 'react-icons/md';
import { FaBookmark, FaCar, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GrLogout } from 'react-icons/gr';
import Movie from '@mui/icons-material/Movie'; // Correct import
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function Navbar() {
  return (
    <>
      <nav className="sidebar">
        <div className="logo">Movie Booking System</div>
        <div className="nav-links1">
          <Link to={"/dash"}><a href="#"><MdDashboard /> Dashboard</a></Link>
          <Link to={"/two"}><a href="#"><BedroomBabyIcon /> Kids</a></Link>
          <Link to={"/four"}><a href="#"><Movie /> Horror</a></Link> {/* Updated usage */}
          <Link to={"/fours"}><a href="#"><AddReactionIcon /> Action</a></Link>
          {/* <Link to={"/user"}><a href="#"><FaUserAlt /> Total Users List</a></Link> */}
          <Link to={"/logout"}><a href="#"><GrLogout /> Logout</a></Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
