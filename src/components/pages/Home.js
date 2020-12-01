import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CentralSection from '../CentralSection';
import Footer from '../Footer';

function Home () {
  return (
    <>
      <CentralSection />
      <Cards/>
      <Footer />
    </>
  );
}

export default Home;