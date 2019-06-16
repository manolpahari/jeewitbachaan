import React from 'react';
import './App.css';
import Navbar from '../components/layout/navbar/Navigation';
import Banner from '../components/layout/banner/Banner';
import FeaturedVideo from '../components/dashboard/FeaturedVideos';
import Footer from '../components/layout/footer/Footer';

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <FeaturedVideo/>  
        <Footer/>  
    </div>
  );
}

export default App;
