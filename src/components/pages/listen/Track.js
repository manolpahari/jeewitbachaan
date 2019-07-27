import React from 'react';
import { FaRegPlayCircle, FaRegPauseCircle, FaPlay, FaPause } from "react-icons/fa";

let song = new Audio('https://jeewitbachan-assets.s3.ap-south-1.amazonaws.com/audiobooks/col/col_1.mp3'
);

class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            nowPlaying: '',
            isPlaying: false,
            isPaused: true,
        }
    }

    componentDidUpdate() {
        song.addEventListener('timeupdate', () => {
        const fillBar = document.getElementById("fill");
        if(fillBar){
            let position = song.currentTime/ song.duration;
            fillBar.style.width = position * 100 + '%';
        }else{
            return null;
        }
        });
    };
    
//toggle isPlayng state to display play/pause button
    toggleIsPlaying = (id) => {

        if(id === this.state.nowPlaying){
            this.setState((prevState) => {
                return {
                isPlaying: !prevState.isPlaying,
                isPaused: !prevState.isPaused,
                }
            })
        }else {
            this.setState(() => {
                return {
                    nowPlaying: id,
                    isPlaying: true,
                    isPaused: false,
                }
               
            })
        }

    }

    render() {
        const { albums } = this.props;
        const { nowPlaying, isPlaying, isPaused } = this.state;
        const tracksList = albums.tracks.map(tracks => {return tracks});

       //Function to play or pause the audio Book 1
       const playOrPause = (src) => {
        let newSong = new Audio(src);
        if(song.src === newSong.src) { 
             if(song.paused) { 
                 song.play();
                
             }else{
                 song.pause();
             }
        }else {  
            song.pause();
            song = newSong;
            song.play();
        }
    }


        //map tracksList to get the indidual track 
        
        const tracklists = tracksList.map( track => {
            return <div key={track.id} className="track">
                        <span className="play-pause pointer dim"
                        onClick={() => {playOrPause(track.url); this.toggleIsPlaying(track.id); }}
                        >
                            {
                                !isPlaying && nowPlaying === isPlaying && isPaused ?   
                                   <FaPause color="#0E55D6" size="1.5em"/> : 
                                isPlaying && nowPlaying === track.id && !isPaused? 
                                   <FaPause color="#0E55D6" size="1.5em"/> : 
                                !isPlaying && nowPlaying === track.id && !isPaused ? 
                                   <FaPause color="#0E55D6" size="1.5em"/> : <FaPlay color="#0E55D6" size="1.5em"/>
                            }
                     
                        </span>
                        <span className="audio-title">{track.title}</span>
                        <span className="audio-length">{track.length}</span>
                       
                    </div>  
        })
                            
        
        return (  
            <div className='audio-list-container'>
                  <div className="player-wrapper">
                      <div className="player">
                          <div id="audioImg" className="audio-img">
                          </div>
                          <div id="audioTitle" className="audio-title">{tracksList[0].title}
                          </div>
                          <div className="slider-wrapper">
                              {/* <input id="audioSlider" type="range" min="0" max="10" step=""/> */}
                              <div className="seek-bar">
                                <div id="fill"></div>
                                <div id="handle"></div>
                              </div>
                          </div>
                          <div className="controllers flex justify-center">
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
                          {tracklists}
                     </div>
                 </div>
            </div>
        )
       
    }
}

export default Track;