import React, { useState } from 'react';
import usuario from '../../imagenes/usuario.png';
import '../../css/stylesheet.css';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:8080/usuarios/loginAccept', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, password: password }),
            });

            if (!res.ok) {
                const message = await res.text();
                setError(message || 'Credenciales incorrectas');
                return;
            }

            const data = await res.json();
            localStorage.setItem('token', data.token); // suponiendo que el backend devuelve { token: '...' }
            setError(null);
            alert('Login exitoso');
            // Redirigir según el rol
            // window.location.href = '/';
        } catch (err) {
            setError('Error de conexión con el servidor');
        }
    };

    return (
        <div className="login-container-auth">
            <div className="login-box-auth">
                <h2>Login</h2><br />
                <div className="user-avatar-auth">
                    <img src={usuario} alt="User Avatar" />
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input-group-auth">
                        <i className="bi bi-person-fill"></i>
                        <input
                            type="text"
                            placeholder="User id"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group-auth">
                        <i className="bi bi-key-fill"></i>
                        <input
                            type="password"
                            placeholder="User Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn-auth">Log in</button>
                </form>
                {error && <p className="error-message-auth">{error}</p>}
                <br />
                <p>Don't have an account? <a href="/register" className="register-link-auth">Register</a></p>
            </div>
        </div>
    );
};

export default Login;
