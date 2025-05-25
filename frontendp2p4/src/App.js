import React from 'react';
import './App.css';
import Header from './componentes/common/Header';
import Footer from './componentes/common/Footer';
import Index from "./componentes/index/Index";

function App() {
    return (
        <div className="App">
            <Header />

            <Index />

            <Footer />
        </div>
    );
}

export default App;
