import React, { useContext } from 'react';
import logo from '../../imagenes/logo.png';
import '../../css/common.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Header = () => {
    const { usuario, logout } = useContext(AppContext);
    const rol = usuario?.rol;

    return (
        <header className={`header header-${rol?.toLowerCase() || 'index'}`}>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Medical Appointments" />
                    <span>Medical Appointments</span>
                </div>

                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>

                        {rol === 'MEDICO' && (
                            <>
                                <li><Link to="/medicos/show">Appointments</Link></li>
                                <li><Link to="/medicos/perfil">Profile</Link></li>
                                <li className="dropdown">
                                    <a href="#">Banner▼</a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/medicos/settings">Settings</Link></li>
                                        <li><button onClick={logout} className="logout-button">Log out</button></li>
                                    </ul>
                                </li>
                            </>
                        )}

                        {rol === 'PACIENTE' && (
                            <>
                                <li><Link to="/pacientes/citas">Historico</Link></li>
                                <li><Link to="/pacientes/indexPaciente">Search</Link></li>
                                <li className="dropdown">
                                    <a href="#">SLee▼</a>
                                    <ul className="dropdown-menu">
                                        <li><button onClick={logout} className="logout-button">Log out</button></li>
                                    </ul>
                                </li>
                            </>
                        )}

                        {rol === 'ADMIN' && (
                            <li className="dropdown">
                                <a href="#">Banner▼</a>
                                <ul className="dropdown-menu">
                                    <li><button onClick={logout} className="logout-button">Log out</button></li>
                                </ul>
                            </li>
                        )}

                        {!rol && (
                            <>
                                <li><Link to="/">Search</Link></li>
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
