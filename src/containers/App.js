import React from 'react';
import './App.css';
import Navbar from '../components/layout/navbar/Navigation';
import Banner from '../components/layout/banner/Banner';
import FeaturedVideo from '../components/dashboard/FeaturedVideos';
import Footer from '../components/layout/footer/Footer';
import { colAudiobook } from '../components/tabs/listen/playlists';
import Listen from '../components/tabs/listen/Listen'

const App = () => {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <FeaturedVideo/>  
        <Listen playlists={colAudiobook} />
        <Footer/>  
    </div>
  );
}

export default App;
