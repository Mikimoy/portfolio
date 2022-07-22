import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MainHome from '../components/MainHome';
import AboutUs from '../components/AboutUs';
import SiapaSaja from '../components/SiapaSaja';
import ImageOne from '../components/Parallax';
import ImageTwo from '../components/Parallax2';
import Footer from  '../components/Footer';
import Portofolio from '../components/Portofolio';

const Home = () => {
  return (
    <div>
        <Header />
            <Hero />
            <MainHome />
            <section>
            <ImageOne/>
            </section>
            <AboutUs />
            <ImageTwo/>
            
            <SiapaSaja />
            <section>
            <Portofolio />
            <Portofolio />
            <Portofolio />
            </section>
            <Footer/>
    </div>
  )
}

export default Home
