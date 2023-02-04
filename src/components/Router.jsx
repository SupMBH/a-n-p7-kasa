//Import paquets react-rooter
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import des pages routées
import Home from '../pages/Home/Home';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from '../pages/About/About.jsx'
import Error404 from '../pages/Error404/Error404.jsx';
import Appartment from '../pages/Apartement/Apartment.jsx';
//import './assets/styles/normalize.css'

const Router = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="apartment/:productId" exact strict element={<Appartment />} />        
            <Route path="*" element={<Error404 />} /> {/*Page d'erreur car impossibilité d'exporter <switch> malgré 'npm install react-router-dom@latest',
                ou encore 'yarn add react-router-dom@latest'*/}
        </Routes>
        <Footer />
    </BrowserRouter>
);
  
export default Router;