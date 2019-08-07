import React from 'react';
import Book from './book.png';
import Headphone from './headphone.png';
import Play from './play-button.png';


const Banner = ({ onRouteChange, bannerData, route }) => {

  return (
    <div>
        {
          route === 'home' || route === 'watch' ? 
            <div className="banner-bg">
                    <div className="banner-content-right -auto">
                      <iframe src={bannerData[0].src} frameBorder="0" title="Revelation"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                      </iframe>
                  </div>
                  <div className="banner-content-left">
                      <h2>{bannerData[0].header}</h2>
                      <h2>{bannerData[0].subHeader}</h2>
                      <p className="title">{bannerData[0].description}</p>
                  </div>
            </div>      
            : route === 'listen' ?
              <div className="banner-bg">
                  <div className="banner-content-right -auto">
                      <img
                      src={bannerData[2].src} alt=""
                      style={{width:'800px', height:'545px', marginTop:'56px'}}
                      />
                  </div>
                  <div className="banner-content-left">
                      <h3>{bannerData[2].header}</h3>
                      <h2>{bannerData[2].subHeader}</h2>
                      <p className="title">{bannerData[2].description}</p>
                  </div>
              </div> 
            : route === 'read' ?  
              <div className="banner-bg">
                  <div className="banner-content-right -auto">
                      <img 
                      src={bannerData[3].src} alt=""
                      style={{width:'800px', height:'597px', marginTop:'56px'}}
                      />
                  </div>
                  <div className="banner-content-left">
                      <h2>{bannerData[3].header}</h2>
                      <h2>{bannerData[3].subHeader}</h2>
                      <p className="title">{bannerData[3].description}</p>
                  </div>
              </div> : null
        }
      {/* Banner Tab */}
        <div className="banner-tab">
          <div className="tab-wrapper">
            <ul>
              <li className="watch" 
              onClick={() => onRouteChange('watch')}>
              <img className="change-my-color" src={Play} alt=""/><p className="tab-title">Watch</p>
              </li>
              <li className="listen" onClick={() => onRouteChange('listen')}><img src={Headphone} alt=""/><p className="tab-title">Listen</p></li>
              <li className="read" onClick={() => onRouteChange('read')}><img src={Book} alt=""/><p className="tab-title">Read</p></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Banner;
