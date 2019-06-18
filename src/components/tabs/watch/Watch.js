import React from 'react';

const Listen = ({ onRouteChange }) => {
    return (
        <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1" onClick={ ()=> onRouteChange('home') }>Back to Homepage</span>
              <h1 style={{marginTop:'1em', color:'#0081FF'}}>Featured Videos</h1>
              <hr/>
              <div className="filter-options">
                <ul className="filter-buttons">
                  <li><a href="/">All</a></li>
                  <li><a href="/">Broadcast</a></li>
                  <li><a href="/">Revial Series</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                  <li><a href="/">Special Projects</a></li>
                </ul>
              </div>
              <div className="video-box">
                <iframe width="450" height="280" src="https://www.youtube.com/embed/3C82IynR-S4" 
                frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
                </iframe>
  
              </div>
          </div>
      </div>
    )
}

export default Listen;
