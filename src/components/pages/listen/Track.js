import React from 'react';
import { FaRegPlayCircle, FaRegPauseCircle, FaPlay, FaPause } from "react-icons/fa";


class Track extends React.Component {
    constructor() {
        super();
        this.state={
            nowPlaying: '',
            isPlaying: false
        }
    }
//toggle isPlayng state to display play/pause button
    toggleIsPlaying(id) {
        this.setState( prevState => ({
            nowPlaying: id,
            isPlaying: !prevState.isPlaying
        }))
        console.log('nowPlaying id', this.state.nowPlaying);
        console.log('isPlaying', this.state.isPlaying)
    }

    render() {
        const { playOrPause, albums, timeupdate } = this.props;
        const { nowPlaying, isPlaying } = this.state;
        const tracksList = albums.map(tracks => {return tracks});

        return (  
            <div className='audio-list-container'>
                  <div className="player-wrapper">
                      <div className="player">
                          <div id="audioImg" className="audio-img">
                          </div>
                          <div id="audioTitle" className="audio-title">{tracksList[0].title}
                          </div>
                          <div className="slider-wrapper">
                              <input id="audioSlider" type="range" min="0" max="10" step="1" onChange={timeupdate}/>
                          </div>
                          <div className="controllers">
                              <span 
                              className="pointer"
                              onClick={() => {playOrPause(tracksList[0].url); this.toggleIsPlaying(tracksList[0].id); }}
                              >
                                  {
                                      isPlaying && nowPlaying === tracksList[0].id ? <FaRegPauseCircle color="white" size="4em"/>:
                                      <FaRegPlayCircle color="white" size="4em"/>
                                  }
                              </span>
                              <span><input id="volumeSlider" type="range" min="0" max="1" step="0.01"  hidden /></span>
                          </div>
                      </div>
                      <div className="playlist">
                          {
                             //map tracksList to get the indidual track 
                            tracksList.map( track => {
                                return <div key={track.id} className="track">
                                            <span className="play-pause pointer dim"
                                            onClick={() => {playOrPause(track.url); this.toggleIsPlaying(track.id); }}
                                            >
                                                {
                                                    isPlaying && nowPlaying === track.id ? <FaPause color="#0E55D6" size="1.5em"/> : 
                                                    <FaPlay color="#0E55D6" size="1.5em"/>
                                                }
                                            </span>
                                            <span className="audio-title">{track.title}</span>
                                            <span className="audio-length">{track.length}</span>
                                        </div>  
                            })
                          }
                     </div>
                 </div>
            </div>
        )
       
    }
}

export default Track;