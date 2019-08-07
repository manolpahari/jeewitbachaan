import React from 'react';
import './watch.styles.css';
import { VIDEO_DATA } from '../../video/videoslist';
import VideoCard from '../../video/video-card/video-card.component';

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
      videoData: VIDEO_DATA,
      route: 'home',
      filterOption : ''
    }
  }

   componentDidMount () {
    //  const fullUrlPlaylists = `https:www.googleapis.com/youtube/v3/playlists?part=${this.state.apiRequestParameter.part}&channelId=${this.state.apiRequestParameter.channelId}&maxResults=${this.state.apiRequestParameter.maxResults}&order=${this.state.apiRequestParameter.order}&key=${this.state.apiRequestParameter.apiKey}`;
    
    //  console.log(fullUrlPlaylists);
    //  fetch(fullUrlPlaylists)
    //  .then(resp => resp.json())
    //  .then(data => this.setState({ playlistData: data }))
    //  .catch(err => console.log(err))
   }


  
  render() {
    const { onRouteChange, toggleModal, isModalOpen, showVideo } = this.props;
    const { videoData, filterOption } = this.state;
    const handleFilter = (event) => {
      const e = event.currentTarget.dataset.id;
      this.setState({...this.state, filterOption: e });
    }

    const videos = videoData.map((video, idx) => {
      return video.category.includes(filterOption) ? video : idx;
    });
    
    return (
        <div style={{background:'#F7FBFF', position:'relative', top:'200px'}}>
          <div className="container">
              <span style={{fontWeight:'900', fontSize:'1.2rem'}}>&larr;</span> 
              <span className="pointer ml1" onClick={onRouteChange}>Back to Homepage</span>
              <h2 style={{marginTop:'1em', color:'#0081FF'}}>Featured Videos</h2>
              <hr/>
              <div className="filter-options">
                <ul className="filter-buttons">
                 <li data-id='All' onClick={handleFilter}>All</li>
                 <li data-id='S.B. Thing' onClick={handleFilter}>S.B. Thing</li>
                 <li data-id='Revial Series' onClick={handleFilter}>Revial Series</li>
                 <li data-id='Bible Studies' onClick={handleFilter}>Bible Studies</li>
                 <li data-id='Joseph Magar' onClick={handleFilter}>Joseph Magar</li>
                </ul>
              </div>
              <div className="cards">
                {/* Display an array of video cards */}
                  {
                    videos.map((video, idx) => {
                      return <VideoCard key={idx}
                          video={video} 
                          toggleModal={toggleModal} 
                          isModalOpen={isModalOpen} 
                          showVideo={showVideo}
                          
                          />
                    })
                  }
              </div>
          </div>
      </div>
    )
  }

}

export default Watch;
