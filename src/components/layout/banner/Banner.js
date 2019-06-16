import React from 'react';
import Book from './book.png';
import Headphone from './headphone.png';
import Play from './play-button.png';


const Banner = () => {
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
              <li className="watch"><a href="/watch"><img className="change-my-color" src={Play} alt=""/>Watch</a></li>
              <li className="listen"><a href="listen"><img src={Headphone} alt=""/>Listen</a></li>
              <li className="read"><a href="read"><img src={Book} alt=""/>Read</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Banner;
