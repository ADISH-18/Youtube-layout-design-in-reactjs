import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <FaYoutube className="youtube-icon" />
                <span className="brand-name">YouTube</span>
            </div>
            <input type="text" className="search-bar" placeholder="Search" />
        </div>
    );
};

export default Navbar;
