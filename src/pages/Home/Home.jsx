import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/data/data.json';
import Banner from '../../components/Banner';
import AppartmentCard from '../../components/ApartmentCards';
import '../../assets/styles/Home.css';
import bannerImg from '../../assets/images/bannerImg.jpeg';

const Home = () => {
  const bannerTitle = 'Chez vous, partout et ailleurs';

  return (
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

export default Home;
//R