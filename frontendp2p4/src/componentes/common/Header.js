// src/componentes/common/Header.js
import React from 'react';
import logo from '../../imagenes/logo.png';
import '../../css/common.css';
import {Link} from "react-router-dom";

const Header = ({ rol }) => {
    return (
        <header className={`header header-${rol?.toLowerCase() || 'index'}`}>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Medical Appointments" />
                    <span>Medical Appointments</span>
                </div>

                <nav>
                    <ul>
                        <li><a href="/about">About...</a></li>

                        {rol === 'MEDICO' && (
                            <>
                                <li><a href="/medicos/show">Appointments</a></li>
                                <li><a href="/medicos/perfil">Profile</a></li>
                                <li className="dropdown">
                                    <a href="#">Banner▼</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/medicos/settings">Settings</a></li>
                                        <li><a href="/logout">Log out</a></li>
                                    </ul>
                                </li>
                            </>
                        )}

                        {rol === 'PACIENTE' && (
                            <>
                                <li><a href="/pacientes/citas">Historico</a></li>
                                <li><a href="/pacientes/indexPaciente">Search</a></li>
                                <li className="dropdown">
                                    <a href="#">SLee▼</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/logout">Log out</a></li>
                                    </ul>
                                </li>
                            </>
                        )}

                        {rol === 'ADMIN' && (
                            <li className="dropdown">
                                <a href="#">Banner▼</a>
                                <ul className="dropdown-menu">
                                    <li><a href="/logout">Log out</a></li>
                                </ul>
                            </li>
                        )}

                        {!rol && (
                            <>
                                <li><a href="/">Search</a></li>
                                <li><Link to="/login">Login</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
