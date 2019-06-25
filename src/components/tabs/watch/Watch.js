import React from 'react';
import { VideosList } from '../../video/videoslist';
import WatchVideo from '../../video/watchvideo';  

class Watch extends React.Component {
  constructor() {
    super();
    this.state = {
      apiRequestParameter: {
        apiKey : "AIzaSyD_uxYFPitO2tfvRf9eIELBiBM7WluIyFo",
        maxResults : 14,
        order: 'date',
        type: 'video',
        part:'snippet',
        channelId: 'UCaZrvuy_4QsClMYRCcbyMjQ'
      },
      videoData: [],
      route: 'home',
    }
  }

  // componentDidMount () {
  //   const fullUrlPlaylists = `https://www.googleapis.com/youtube/v3/playlists?part=${this.state.apiRequestParameter.part}&channelId=${this.state.apiRequestParameter.channelId}&maxResults=${this.state.apiRequestParameter.maxResults}&order=${this.state.apiRequestParameter.order}&key=${this.state.apiRequestParameter.apiKey}`;
    
  //   console.log(fullUrlPlaylists);
  //   fetch(fullUrlPlaylists)
  //   .then(resp => resp.json())
  //   .then(data => this.setState({ playlistData: data }))
  //   .catch(err => console.log(err))
  // }
  
  render() {
    
    const { onRouteChange, toggleModal, isModalOpen, showVideo } = this.props;
    const videoList = VideosList.map(videolist => {
      return <WatchVideo key={videolist.id} videoLists={videolist} toggleModal={toggleModal} isModalOpen={isModalOpen} showVideo={showVideo}/>
    });
    
    return (
        <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1" onClick={onRouteChange}>Back to Homepage</span>
              <h1 style={{marginTop:'1em', color:'#0081FF'}}>Featured Videos</h1>
              <hr/>
              <div className="filter-options">
                <ul className="filter-buttons">
                  <li>All</li>
                  <li>Revial Series</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                  <li>Special Projects</li>
                </ul>
              </div>
              <div>
                {/* Display an array of video cards */}
                 {videoList}
              </div>
          </div>
      </div>
    )
  }

}

export default Watch;
