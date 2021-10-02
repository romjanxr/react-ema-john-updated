import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav className="navbar">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory Here</NavLink>
            </nav>
        </div>
    );
};

export default Header;