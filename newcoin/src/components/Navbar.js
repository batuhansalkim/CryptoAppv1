import React from 'react'
import {FaCoins} from "react-icons/fa";

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <FaCoins className='icon'/>
            <h1>Coin <span className='pruple'>Search</span></h1>
        </div>
    </div>
  )
}

export default Navbar