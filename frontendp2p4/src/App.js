import React from 'react';
import './App.css';
import Header from './componentes/common/Header';
import Footer from './componentes/common/Footer';
import Index from "./componentes/index/Index";
import Login from './componentes/login/Login';
import About from './componentes/about/About';
import RegisterType from './componentes/register/RegisterType';
import RegisterPatient from './componentes/register/RegisterPatient';
import RegisterDoctor from './componentes/register/RegisterDoctor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPanel from "./componentes/admin/AdminPanel";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<RegisterType />} />
            <Route path="/register/patient" element={<RegisterPatient />} />
            <Route path="/register/doctor" element={<RegisterDoctor />} />
            <Route path="/admin/AdminPanel" element={<AdminPanel />} />
        </Routes>
    );
}

export default App;