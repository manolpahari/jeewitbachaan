import React from 'react';
import './video-card.styles.css';


const VideoCard = ({ videoList, video, toggleModal, showVideo }) => {
    
    let videoID = '';
    let title = '';
    videoList ?  videoID = videoList.id.videoId : videoID = video.videoId;
    videoList ?  title = videoList.snippet.title : title = video.title;
    const imageURL = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

    return(
                
         <div className="cards__item">
            {
                videoID ? <div className="card" onClick={() => showVideo(videoID)}>
                        <div 
                            className="card__image card__image--fence"
                            style={{backgroundImage:`URL(${imageURL})`}}
                        />
                        <div className="card__content">
                            <div className="card__title">{title}</div>
                            <p className="card__text">Please click the button below to watch the video in full screen. </p>
                            <button 
                            className="btn btn--block card__btn"
                            onClick={() => toggleModal('video')}
                            >Play Video</button>
                        </div>
                    </div> : null
            }
        </div>  
    );
}

export default VideoCard;