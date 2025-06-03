import React, { useContext } from 'react';
import logo from '../../imagenes/logo.png';
import '../../css/common.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { usuario, logout, loading } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();           // borra el usuario del contexto
        navigate('/');      // redirige al index
    };


    if (loading) return null; // 🔁 no renderizar mientras carga

    const rol = usuario?.rol;

    console.log("Usuario:", usuario);
    console.log("Rol:", rol);

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
                                <li><Link to="/medico/MedicoPanel">Appointments</Link></li>
                                <li><Link to="/medico/Perfil">Profile</Link></li>
                                <li className="dropdown">
                                    <button type="button" className="dropdown-toggle">Banner▼</button>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/medico/Settings">Settings</Link></li>
                                        <li><button onClick={handleLogout} className="logout-button">Log out</button>
                                        </li>
                                    </ul>
                                </li>
                            </>
                        )}

                        {rol === 'PACIENTE' && (
                            <>
                                <li><Link to="/pacientes/citas">Historico</Link></li>
                                <li><Link to="/pacientes/indexPaciente">Search</Link></li>
                                <li className="dropdown">
                                    <button type="button" className="dropdown-toggle">SLee▼</button>
                                    <ul className="dropdown-menu">
                                        <li><button onClick={handleLogout} className="logout-button">Log out</button>
                                        </li>
                                    </ul>
                                </li>
                            </>
                        )}

                        {rol === 'ADMINISTRADOR' && (
                            <li className="dropdown">
                                <button type="button" className="dropdown-toggle">Banner▼</button>
                                <ul className="dropdown-menu">
                                    <li><button onClick={handleLogout} className="logout-button">Log out</button>
                                    </li>
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
