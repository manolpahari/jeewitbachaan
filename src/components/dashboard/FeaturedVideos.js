import React from 'react';
import './featured-videos.styles.css';
import VideoCard from '../video/video-card/video-card.component';

class FeaturedVideos extends React.Component {
  
  render() {
    const { playlistData, showVideo, toggleModal } = this.props;
    const videoPlaylistArray = playlistData.map( playlist => {
      return <VideoCard key={playlist.id.videoId} 
              videoList={playlist} 
              showVideo={showVideo} 
              toggleModal={toggleModal}
              />
    })
 
    
    return (
        <div className="featured-videos" style={{}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1">Back to Homepage</span>
              <h1 style={{marginTop:'1em', color:'#0081FF'}}>Recently Added</h1>
              <hr/>
              {/* <div className="filter-options">
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
              </div> */}
              <div className="cards">
               {videoPlaylistArray}
              </div>
          </div>
      </div>
    )
  }

}

export default FeaturedVideos;
