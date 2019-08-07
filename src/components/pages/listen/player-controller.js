import React from 'react';
import {FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";


const Book1Controller = ({ currentTrackTitle, currentTrackId, src, isPlaying, playOrPause, bookId, bookTitle, introTrackUrl }) => {
    return (
        <div className="player-controllers">
            {/* Display Book 1 */}
            
                <div className="player">
                        <div id="audioImg" className="audio-img">
                        </div>
                        <div id="audioTitle" className="audio-title">
                            {
                            currentTrackTitle ? currentTrackTitle : bookTitle
                            }
                        </div>
                    <div className="slider-wrapper">
                        {/* <input id="audioSlider" type="range" min="0" max="10" step=""/> */}
                        <div className="seek-bar">
                            <div id={bookId === 1 ? 'fill' : 'fill2'}></div>
                            <div id="handle"></div>
                        </div>
                    </div>
                    <div className="controllers flex justify-center">
                        <span className="pointer" onClick={() => !src ? playOrPause(introTrackUrl): playOrPause(src)}>
                            {
                                isPlaying && bookId === 1 ?  <FaRegPauseCircle color="white" size="4em"/> :  isPlaying && bookId === 2 ?
                                <FaRegPauseCircle color="white" size="4em"/> : <FaRegPlayCircle color="white" size="4em"/>
                            }
                        </span>
                        <span><input id="volumeSlider" type="range" min="0" max="1" step="0.01"  hidden /></span>
                    </div>
                </div>
    </div>    
    )
}

export default Book1Controller;
