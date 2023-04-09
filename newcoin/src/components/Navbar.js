import React from 'react'
import {FaCoins} from "react-icons/fa";
import "../components/Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Link to="/">
        <div className="navbar">
            <FaCoins className='icon'/>
            
            <h1>Coin <span className='pruple'>Search</span></h1>
            <h2>BatuSlkm</h2>
        </div>
    </Link>
  )
}

export default Navbar