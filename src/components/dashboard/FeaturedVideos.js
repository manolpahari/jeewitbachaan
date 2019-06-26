import React from 'react';
import Video from '../video/video';

const FeaturedVideos = ({ videosData }) => {
  const videosArray = videosData.map( video => {
    return <Video key={video.etag} video={video} />;
  })
  return (
      <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
        <div className="container">
            <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
            <span className="pointer ml1">Back to Homepage</span>
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
            <div>
             {videosArray}
            </div>
        </div>
    </div>
  )
}

export default FeaturedVideos;
