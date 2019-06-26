import React from 'react';
import Book from './book.png';
import Headphone from './headphone.png';
import Play from './play-button.png';


const Banner = ({ onRouteChange }) => {
  return (
    <div>
        <div className="banner-bg">
            <div className="banner-content-right -auto">
                <iframe src="https://www.youtube.com/embed/0tyRis6Md6A" frameBorder="0" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
            </div>
        <div className="banner-content-left">
                <h2>Revelation: <br/>
                the Bride, the Beast, and Babylon</h2>
                <p className="title">Going to the very heart of the Bible’s most challenging book, this 90-minute documentary, hosted by Doug Batchelor, decodes the visions of Revelation 12 and 17 for everyone to understand.</p>
              </div>    
      </div>
    
      {/* Banner Tab */}
        <div className="banner-tab">
          <div className="tab-wrapper">
            <ul>
              <li className="watch" 
              onClick={() => onRouteChange('watch')}>
              <img className="change-my-color" src={Play} alt=""/>Watch
              </li>
              <li className="listen" onClick={() => onRouteChange('listen')}><img src={Headphone} alt=""/>Listen</li>
              <li className="read" onClick={() => onRouteChange('read')}><img src={Book} alt=""/>Read</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Banner;
