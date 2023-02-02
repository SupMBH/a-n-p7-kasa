//Import des paquets React et ReactDom
import React from 'react';
import ReactDOM from 'react-dom/client';
//Import des métriques d'efficacité Web (indicateurs Performance-Qualité)
import reportWebVitals from './reportWebVitals';
//Import paquets react-rooter
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/index.css';
//import './assets/styles/normalize.css'
//Import des pages routées
import Home from './pages/Home/Home';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './pages/About/About.jsx'
import Error404 from './pages/Error404/Error404.jsx';
import Appartment from './pages/Appartement/Appartment.jsx';
import './assets/styles/index.css';
//Module de traction
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="appartment" element={<Appartment />} />        
        <Route path="*" element={<Error404 />} /> {/*Page d'erreur car impossibilité d'exporter <switch> malgré 'npm install react-router-dom@latest',
         ou encore 'yarn add react-router-dom@latest'*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();