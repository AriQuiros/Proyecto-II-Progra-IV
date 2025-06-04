import React, { useEffect, useState, useContext } from 'react';
import '../../css/stylesheet.css';
import { AppContext } from '../../context/AppContext';
import usuarioImg from '../../imagenes/usuario.png';


const MedicoPanel = () => {
    const { usuario } = useContext(AppContext);
    const [citas, setCitas] = useState([]);
    const [estado, setEstado] = useState('');
    const [paciente, setPaciente] = useState('');
    const [mensaje, setMensaje] = useState('');

    const fetchCitas = async () => {
        try {
            const query = new URLSearchParams();
            if (estado) query.append('estado', estado);
            if (paciente) query.append('paciente', paciente);

            const res = await fetch('http://localhost:8080/api/medicos/citas?' + query.toString(), {
                headers: {
                    Authorization: `Bearer ${usuario?.token}`,
                },
            });

            const data = await res.json();
            console.log('Citas desde backend:', data);
            setCitas(data);
        } catch (err) {
            console.error('Error al cargar citas:', err);
        }
    };

    useEffect(() => {
        if (usuario?.token) fetchCitas();
    }, [usuario, estado, paciente]);

    const confirmarCita = async (id) => {
        const nota = prompt("Ingrese las notas para la cita:");
        if (!nota) return;

        const formData = new URLSearchParams();
        formData.append('citaId', id);
        formData.append('notas', nota);

        const res = await fetch('http://localhost:8080/medicos/confirmar', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            setMensaje('Cita confirmada');
            fetchCitas();
        }
    };

    const cancelarCita = async (id) => {
        const res = await fetch(`http://localhost:8080/medicos/cancelar?citaId=${id}`);
        if (res.ok) {
            setMensaje('Cita cancelada');
            fetchCitas();
        }
    };

    return (
        <div className="doctor-citas-contenido">
            <h2> {usuario?.nombre} Bruce Banner- appointments</h2>
            {mensaje && <p className="mensaje-exito">{mensaje}</p>}
            <form className="doctor-search-bar" onSubmit={(e) => { e.preventDefault(); fetchCitas(); }}>
                <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                    <option value="">Estado</option>
                    <option value="PENDIENTE">Pendiente</option>
                    <option value="CONFIRMADA">Confirmada</option>
                    <option value="CANCELADA">Cancelada</option>
                </select>
                <input
                    type="text"
                    placeholder="Paciente"
                    value={paciente}
                    onChange={(e) => setPaciente(e.target.value)}
                />
                <button type="submit" className="doctor-btn-search">Buscar</button>
            </form>

            <div className="doctor-cards-container">
                {Array.isArray(citas) && citas.length > 0 ? (
                    citas.map((cita) => (
                        <div className="doctor-card-cita" key={cita.numero}>
                            <div className="doctor-left">
                                <img src={usuarioImg} alt="Paciente"/>
                                <span className="doctor-paciente-nombre">{cita.pacienteNombre}</span>
                            </div>
                            <div className="doctor-right">
                                <p>{new Date(cita.fechaHora).toLocaleString()}</p>
                                <span className={`badge-${cita.estado.toLowerCase()}-doctor`}>
                                    {cita.estado}
                                </span>
                                {cita.estado === 'PENDIENTE' && (
                                    <div className="doctor-acciones">
                                        <button className="link-green-doctor" onClick={() => confirmarCita(cita.numero)}>✔ Atender</button>
                                        <button className="link-red-doctor" onClick={() => cancelarCita(cita.numero)}>✘ Cancelar</button>
                                    </div>
                                )}
                                {cita.estado === 'CONFIRMADA' && (
                                    <div className="doctor-acciones">
                                        <button className="link-view-doctor" onClick={() => alert(cita.notas || "Sin notas")}>🔍 Ver Nota</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ marginTop: "1rem", textAlign: "center", color: "#555" }}>
                        No hay citas registradas en este momento.
                    </p>
                )}
            </div>
        </div>
    );
};

export default MedicoPanel;
