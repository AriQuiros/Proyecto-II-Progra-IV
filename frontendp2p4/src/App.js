import React from 'react';
import './App.css';
import Header from './componentes/common/Header';
import Footer from './componentes/common/Footer';
import Index from "./componentes/index/Index";
import Login from './componentes/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        </Routes>
    );
}

export default App;