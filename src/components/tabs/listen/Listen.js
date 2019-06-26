import React from 'react';
import TrackList from './TrackList';
import { playlists } from './playlists';

const Listen = ({ onRouteChange }) => {
    return (
        <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1" onClick={ ()=> onRouteChange('home') }>Back to Homepage</span>
              <h1 style={{marginTop:'1em', color:'#0081FF'}}>Audio Collections</h1>
              <hr/>
              <div className="br3 pa3 ma2 bw2 shadow-3 playlist">
              <div className='flex justify-around track-item'>
                <p className='w-30 pa2 tc'>Chapter Title</p>
                <p className='w-40 pa2 tc'>Audio File</p>
                <p className='w-20 pa2 tc'>Chapter Length</p>
                </div>
                  
                <TrackList playlists={playlists}/>
              </div>
          </div>
      </div>
    )
  }

export default Listen;
