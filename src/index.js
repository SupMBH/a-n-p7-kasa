//Import des paquets React et ReactDom
import React from 'react';
import ReactDOM from 'react-dom/client';
//Import des métriques d'efficacité Web (indicateurs Performance-Qualité)
import reportWebVitals from './reportWebVitals';
//Impor Style
import './assets/styles/index.css';
// import Router
import Router from './components/Router';
//Module de traction
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
reportWebVitals ()
reportWebVitals(console.log)