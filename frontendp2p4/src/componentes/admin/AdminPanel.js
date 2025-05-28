import React, { useEffect, useState, useContext } from 'react';
import '../../css/stylesheet.css';
import { AppContext } from '../../context/AppContext';

const AdminPanel = () => {
    const [doctores, setDoctores] = useState([]);
    const { usuario } = useContext(AppContext);

    useEffect(() => {
        const fetchDoctores = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/admin/doctores', {
                    headers: {
                        Authorization: `Bearer ${usuario?.token}`,
                    },
                });
                if (!res.ok) throw new Error('Error al cargar doctores');
                const data = await res.json();
                setDoctores(data);
            } catch (err) {
                console.error('Error:', err);
            }
        };

        fetchDoctores();
    }, [usuario]);

    const aprobarMedico = async (id) => {
        try {
            const res = await fetch(`http://localhost:8080/api/admin/aprobarMedico/${id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${usuario?.token}`,
                },
            });
            if (res.ok) {
                setDoctores((prev) =>
                    prev.map((medico) =>
                        medico.id === id ? { ...medico, estado: 'APROBADO' } : medico
                    )
                );
            } else {
                alert('Error al aprobar médico');
            }
        } catch (error) {
            console.error('Error al aprobar:', error);
        }
    };

    return (
        <div className="admin-contenido">
            <h1>Lista de Doctores</h1>
            <table className="admin-medico-table">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Ciudad</th>
                    <th>Costo de Consulta</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {doctores.map((medico) => (
                    <tr key={medico.id}>
                        <td>{medico.usuario?.nombre}</td>
                        <td>{medico.especialidad}</td>
                        <td>{medico.ciudad}</td>
                        <td>{medico.costoConsulta}</td>
                        <td>{medico.estado}</td>
                        <td>
                            {medico.estado === 'PENDIENTE' && (
                                <button
                                    className="btn-aprobar"
                                    onClick={() => aprobarMedico(medico.id)}
                                >
                                    Aprobar
                                </button>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
