import React from 'react';

const Listen = ({ onRouteChange }) => {
    return (
        <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1" onClick={ ()=> onRouteChange('home') }>Back to Homepage</span>
              <h1 style={{marginTop:'1em', color:'#0081FF'}}>Audio Collections</h1>
              <hr/>
       
          </div>
      </div>
    )
  }

export default Listen;
