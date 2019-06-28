import React from 'react';
// import Track from './Track';
import { FaRegPlayCircle, FaPlay } from "react-icons/fa";

const TrackList = () => { //{ playlists }
    return (  
        <div className='audio-list-container'>
            <div className="player-wrapper">
                <div className="player">
                    <div id="audioImg" className="audio-img">
                    </div>
                    <div id="audioTitle" className="audio-title">This is a sample audio title
                    </div>
                    <div className="slider-wrapper">
                        <input id="audioSlider" type="range" min="0" step="1" onchange="seekSong()"/>
                    </div>
                    <div className="controllers">
                        <span onclick="playOrPause();">
                            <FaRegPlayCircle color="white" size="4em"/>
                        </span>
                        <input id="volumeSlider" type="range" min="0" max="1" step="0.01" onchange="adjustVolume();" hidden />
                    </div>
                </div>
                <div className="playlist">
                    <div className="track">
                        <span className="play-pause">
                            <FaPlay color="#0E55D6" size="1.5em"/>
                        </span>
                        <span className="audio-title">This is a sample track title</span>
                        <span className="audio-length">25:20</span>
                    </div>
                    <div className="track">
                        <span className="play-pause">
                            <FaPlay color="#0E55D6" size="1.5em"/>    
                        </span>
                        <span className="audio-title">This is a sample track title</span>
                        <span className="audio-length">25:20</span>
                    </div>
                    <div className="track">
                        <span className="play-pause">                            
                            <FaPlay color="#0E55D6" size="1.5em"/>    
                        </span>
                        <span className="audio-title">This is a sample track title</span>
                        <span className="audio-length">25:20</span>
                    </div>
                </div>
        </div>
        <div className="player-wrapper">
                <div className="player">
                    <div id="audioImg" className="audio-img">
                    </div>
                    <div id="audioTitle" className="audio-title">This is a sample audio title
                    </div>
                    <div className="slider-wrapper">
                        <input id="audioSlider" type="range" min="0" step="1" onchange="seekSong()"/>
                    </div>
                    <div className="controllers">
                        <span onclick="playOrPause();">
                            <FaRegPlayCircle color="white" size="4em"/>
                        </span>
                        <input id="volumeSlider" type="range" min="0" max="1" step="0.01" onchange="adjustVolume();" hidden />
                    </div>
                </div>
                <div className="playlist">
                    <div className="track">
                        <span className="play-pause">
                            <FaPlay color="#0E55D6" size="1.5em"/>
                        </span>
                        <span className="audio-title">This is a sample track title</span>
                        <span className="audio-length">25:20</span>
                    </div>
                    <div className="track">
                        <span className="play-pause">
                            <FaPlay color="#0E55D6" size="1.5em"/>    
                        </span>
                        <span className="audio-title">This is a sample track title</span>
                        <span className="audio-length">25:20</span>
                    </div>
                    <div className="track">
                        <span className="play-pause">                            
                            <FaPlay color="#0E55D6" size="1.5em"/>    
                        </span>
                        <span className="audio-title">This is a sample track title</span>
                        <span className="audio-length">25:20</span>
                    </div>
                </div>
        </div>
            {/* {
                playlists.map((audiobook, i) => {
                    return (
                        <Track 
                            key={i}
                            id={playlists[i].id}
                            title={playlists[i].title}
                            url={playlists[i].url}
                            length={playlists[i].length}
                        />
                    )
                }
            )} */}
        </div>
    )
}

export default TrackList;