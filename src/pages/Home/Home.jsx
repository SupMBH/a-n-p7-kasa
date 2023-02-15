import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/data/data.json';
import Banner from '../../components/Banner';
import AppartmentCard from '../../components/ApartmentCards';
import '../../assets/styles/Home.css';
import bannerImg from '../../assets/images/bannerImg.jpeg';

//Fonction de composant Home qui définie la page Home en returnant un composant div composé du composant enfant Banner puis une section principale en classe main
const Home = () => {
  //On définie bannerTitle avec le string demandé   
  const bannerTitle = 'Chez vous, partout et ailleurs';  
  return (
    //On va d'abord retourner Banner qui est passé avec les propriétés title et picture (définies repsectivement par bannerTitle et bannerImg)
    //ensuite on itère sur le tableau data avec la méthode map et pour chaque élément du tab, on rend un composant AppartmentCard avec les propriétés de cet élément 
    //On utilise la syntaxe de décomposition de l'objet (...). Le tout est linké et passé avec les propriétés to, key et title.
    <div>      
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {data.map((apartment) => (
          <Link
            className="main__link"
            to={`/apartment/${apartment.id}`}
            key={apartment.id}
            title={apartment.title}
          >
            <AppartmentCard {...apartment} />
          </Link>
        ))}
      </main>
    </div>
  );
};
//On exporte Home en tant que composant par défaut
export default Home;
