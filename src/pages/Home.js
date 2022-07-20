import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MainHome from '../components/MainHome';
import AboutUs from '../components/AboutUs';
import SiapaSaja from '../components/SiapaSaja';
import ImageOne from '../components/Parallax';
import Footer from  '../components/Footer';
const Home = () => {
  return (
    <div>
        <Header />
            <Hero />
            <MainHome />
            <section>
            <ImageOne/>
            </section>
            <MainHome />
            <AboutUs />
            <SiapaSaja />
            <ImageOne/>
            <Footer/>
    </div>
  )
}

export default Home
