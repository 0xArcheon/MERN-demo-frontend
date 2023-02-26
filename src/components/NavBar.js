import React from 'react'
import './navbar.css';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className='nav'>
            <h1>RWM Demo</h1>
            <NavLink to="/view">
                <div>View</div>
            </NavLink>

        </div>
    )
}

export default NavBar