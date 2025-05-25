import { useState } from 'react';
import '../../css/stylesheet.css';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === 'usuario') setUsuario(value);
        if (name === 'clave') setClave(value);
    }

    function handleSubmit() {
        console.log('Login simulado:', { usuario, clave });
        alert('Login enviado (solo frontend)');
    }

    function handleLimpiar() {
        setUsuario('');
        setClave('');
    }

    return (
        <div className="login-container-auth">
            <div className="login-box-auth">
                <h2>Login</h2>
                <div className="user-avatar-auth">
                    <img src="/imagenes/usuario.png" alt="User Avatar" />
                </div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group-auth">
                        <i className="bi bi-person-fill"></i>
                        <input
                            type="text"
                            name="usuario"
                            placeholder="User ID"
                            value={usuario}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group-auth">
                        <i className="bi bi-key-fill"></i>
                        <input
                            type="password"
                            name="clave"
                            placeholder="Password"
                            value={clave}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="botonera">
                        <button type="button" className="login-btn-auth" onClick={handleSubmit}>Login</button>
                        <button type="button" className="login-btn-auth" onClick={handleLimpiar}>Limpiar</button>
                    </div>
                </form>
                <p>¿No tienes cuenta? <a href="/register" className="register-link-auth">Regístrate</a></p>
            </div>
        </div>
    );
}

export default Login;
