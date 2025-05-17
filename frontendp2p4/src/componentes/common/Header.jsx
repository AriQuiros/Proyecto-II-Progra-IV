import React from 'react';

const Header = () => (
    <div className="headerIndex">
        <div className="header-container">
            <div className="logo">
                <img src="./imagenes/logo.png" alt="Medical Appointments" />
                <span>Medical Appointments</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#about" className="user-name">About...</a></li>
                    <li><a href="#search" className="user-name">Search</a></li>
                    <li><a href="#login" className="user-name">Login</a></li>
                </ul>
            </nav>
        </div>
    </div>
);

export default Header;