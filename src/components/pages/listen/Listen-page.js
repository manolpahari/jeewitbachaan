import React from 'react';
import Player from './player.js';


const Listen = ({ onRouteChange }) => {
  
    return (
        <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1" onClick={ ()=> onRouteChange('home') }>Back to Homepage</span>
              <h2 style={{marginTop:'1em', color:'#0081FF'}}>Audio Collections</h2>
              <hr/>
              <div className="">
              {/* <div className='flex justify-around track-item'>
                <p className='w-30 pa2 tc'>Chapter Title</p>
                <p className='w-40 pa2 tc'>Audio File</p>
                <p className='w-20 pa2 tc'>Chapter Length</p>
              </div> */}
                <Player/> 
              </div>
          </div>
      </div>
    )
  }

export default Listen;
