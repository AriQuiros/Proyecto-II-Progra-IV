import React, { useState } from 'react';
import '../../css/stylesheet.css';

const RegisterPatient = () => {
    const [form, setForm] = useState({
        nombre: '',
        clave: '',
        confirmClave: '',
        historialMedico: '',
        alergias: '',
        rol: 'PACIENTE'
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.clave !== form.confirmClave) {
            setError('Passwords do not match!');
            return;
        }

        // Aquí se enviaría al backend
        console.log('Registro enviado:', form);
        alert('Registro simulado exitoso');
    };

    return (
        <div className="login-container-auth">
            <div className="login-box-auth">
                <h2>Patient Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group-auth">
                        <i className="bi bi-person-fill"></i>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Full Name"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            pattern="[^\s]+"
                            title="No spaces allowed"
                        />
                    </div>

                    <div className="input-group-auth">
                        <i className="bi bi-key-fill"></i>
                        <input
                            type="password"
                            name="clave"
                            id="clave"
                            placeholder="Password"
                            value={form.clave}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group-auth">
                        <i className="bi bi-key-fill"></i>
                        <input
                            type="password"
                            name="confirmClave"
                            id="confirmClave"
                            placeholder="Confirm Password"
                            value={form.confirmClave}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group-auth">
                        <i className="bi bi-calendar-check"></i>
                        <input
                            type="text"
                            name="historialMedico"
                            placeholder="Medical History"
                            value={form.historialMedico}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group-auth">
                        <i className="bi bi-heart-pulse"></i>
                        <input
                            type="text"
                            name="alergias"
                            placeholder="Allergies"
                            value={form.alergias}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn-auth">Register</button>
                </form>

                {error && <div className="error-message-auth">{error}</div>}
            </div>
        </div>
    );
};

export default RegisterPatient;
