import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Blogs from '../components/Blogs';

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Services />
      <Blogs />
    </div>
  );
};

export default Home;

