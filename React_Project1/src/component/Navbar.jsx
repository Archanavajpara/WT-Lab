import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {

    return(
    <>
        <nav class="Navbar">
            <h2>SmartCare</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    </>
    );
}

