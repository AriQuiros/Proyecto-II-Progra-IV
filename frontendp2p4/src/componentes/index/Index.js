import React, { useState, useEffect } from 'react';
import '../../css/stylesheet.css';
import doctorDefault from '../../imagenes/usuario.png';

const BuscarMedicos = () => {
    const [especialidad, setEspecialidad] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [medicos, setMedicos] = useState([]);

    // Cargar desde localStorage al iniciar
    useEffect(() => {
        const esp = localStorage.getItem("especialidad") || '';
        const ciu = localStorage.getItem("ciudad") || '';
        setEspecialidad(esp);
        setCiudad(ciu);
    }, []);

    const handleBuscar = async (e) => {
        e.preventDefault();

        // Guardar en localStorage
        localStorage.setItem("especialidad", especialidad);
        localStorage.setItem("ciudad", ciudad);

        try {
            // Sustituye con tu endpoint real
            const res = await fetch(`/api/medicos?especialidad=${especialidad}&ciudad=${ciudad}`);
            const data = await res.json();
            setMedicos(data);
        } catch (error) {
            console.error("Error al buscar médicos:", error);
        }
    };

    return (
        <div className="search-contenido-doctor">
            <section className="search-bar-doctor">
                <form onSubmit={handleBuscar}>
                    <input
                        type="text"
                        placeholder="Speciality"
                        value={especialidad}
                        onChange={(e) => setEspecialidad(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>

            <section className="cards-doctor">
                {medicos.map((medico) => (
                    <div key={medico.id} className="medico-card-doctor">
                        <div className="card-left-doctor">
                            <img
                                src={medico.imagen ? `/images/perfiles/${medico.imagen}` : doctorDefault}
                                alt={medico.nombre}
                                className="doctor-img-doctor"
                            />
                            <div>
                                <div className="h-doctor">
                                    <h4>{medico.nombre}</h4>
                                    <p>{medico.costoConsulta}</p>
                                </div>
                                <p>{medico.especialidad}</p>
                                <p>{medico.instalacion} @ {medico.ciudad}</p>
                            </div>
                        </div>

                        <div className="card-right-doctor">
                            {medico.horarios?.map((horario, idx) => (
                                <div key={idx} className="horario-group-doctor">
                                    <p className="pfecha">{horario.diaSemana}</p>
                                    <p className="pfecha">{horario.fechaReal}</p>
                                    <div className="horas-doctor">
                                        {horario.ocupado ? (
                                            <button className="hora-ocupada" disabled title="No disponible">
                                                {horario.horaInicio}
                                            </button>
                                        ) : (
                                            <button
                                                className="hora-libre"
                                                onClick={() => {
                                                    // Simula redirección (ajusta con router si lo usas)
                                                    window.location.href = `/confirmar-cita?medicoId=${medico.id}&fecha=${horario.fechaReal}&hora=${horario.horaInicio}`;
                                                }}
                                            >
                                                {horario.horaInicio}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="boton-doctor">
                            <button
                                onClick={() =>
                                    window.location.href = `/cronograma/${medico.id}`
                                }
                            >
                                Schedule <i className="bi bi-arrow-right-circle-fill"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default BuscarMedicos;
