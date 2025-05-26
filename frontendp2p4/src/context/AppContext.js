import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    // Cargar desde localStorage al inicio
    useEffect(() => {
        const token = localStorage.getItem('token');
        const rol = localStorage.getItem('rol');
        const nombre = localStorage.getItem('nombre');

        if (token && rol) {
            setUsuario({ token, rol, nombre });
        }
    }, []);

    // Guardar usuario y token
    const login = ({ token, rol, nombre }) => {
        localStorage.setItem('token', token);
        localStorage.setItem('rol', rol);
        localStorage.setItem('nombre', nombre);
        setUsuario({ token, rol, nombre });
    };

    // Cerrar sesión
    const logout = () => {
        localStorage.clear();
        setUsuario(null);
    };

    return (
        <AppContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};
