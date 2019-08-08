import React from 'react';
import {FaPlay, FaPause } from "react-icons/fa";

const Tracks = ({ tracks, isPlaying, playOrPause, currentTrackId, bookId }) => {
 
    return(
         <div className="playlist">
            <div className="tracklist">   
                {
                    tracks.map(({ id, url, title, length }) => {
                        return <div key={id} className="dim pointer ma3 bg-animate hover-bg-blue"
                                onClick={() => playOrPause(url, title, id, bookId)} >
                                    {
                                    isPlaying && currentTrackId === id ? 
                                        <span className="ma3"><FaPause color="#0E55D6"/></span> :
                                        <span className="ma3"><FaPlay color="#0E55D6"/></span>
                                    }
                                {title} 
                                <span style={{position:'relative', left:'50px'}}>
                                    {length}
                                </span>
                        </div>
                    })
                }
            </div>
        </div> 
    )
}

export default Tracks;