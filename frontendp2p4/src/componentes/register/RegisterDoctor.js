import React, { useState } from 'react';
import '../../css/stylesheet.css';
import { useNavigate } from 'react-router-dom';

const RegisterDoctor = () => {
    const [form, setForm] = useState({
        nombre: '',
        clave: '',
        confirmClave: '',
        especialidad: '',
        ciudad: '',
        costoConsulta: '',
        frecuencia: '',
        instalacion: '',
        rol: 'MEDICO'
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.clave !== form.confirmClave) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const res = await fetch('http://localhost:8080/auth/register/medico', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nombre: form.nombre,
                    clave: form.clave,
                    rol: form.rol
                    // NOTA: Los demás campos no se usan aún en el backend
                }),
            });

            if (!res.ok) {
                const message = await res.text();
                setError(message || 'Error al registrar');
                return;
            }

            alert('Registro exitoso');
            navigate('/login');
        } catch (err) {
            setError('Error de conexión con el servidor');
        }
    };

    return (
        <div className="login-container-auth">
            <div className="login-box-auth">
                <h2>Doctor Registration</h2>
                <form onSubmit={handleSubmit}>
                    {/* Inputs idénticos a tu versión */}
                    {/* ... */}
                    {/* Todos tus campos originales están bien */}
                    {/* ... */}
                    <button type="submit" className="login-btn-auth">Register</button>
                </form>

                {error && <div className="error-message-auth">{error}</div>}
            </div>
        </div>
    );
};

export default RegisterDoctor;
