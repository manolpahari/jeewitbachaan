import React from 'react';

const watchVideo = ({ video, toggleModal, isModalOpen, showVideo, playIcon }) => {
    const imageSrc = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
    const videoId = video.videoId
    return (
        <div>
            {
                video.id ? <div className="video-card grow shadow-5 pointer br2 mr2" onClick={() => showVideo(videoId)}>
                <article 
                    className="br2 ba dark-gray b--black-10 center"
                    onClick={() => toggleModal('video')}
                    >
                    <img className="br2" width="320" height="180" src={imageSrc} alt="imageName" />
                    <img src={playIcon} width="68" height="48" 
                            className="play-icon" 
                            alt="play-icon"
                            style={{position:'absolute', top:'30%', left:'35%'}}/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt mt1">
                            <p className="dtc f6 fw6 lh-copy measure-narrow mt2 mid-gray hover-blue">
                            {video.title}
                            </p>
                        </div>
                    </div>
                </article>
            </div> : null
            }
        </div>
    );
}

export default watchVideo;
