import React from 'react';

const watchVideo = ({ videoLists, toggleModal, isModalOpen, showVideo }) => {
    const imageSrc = `https://img.youtube.com/vi/${videoLists.videoId}/mqdefault.jpg`;
    const videoId = videoLists.videoId
    return (
            <div className="ma2 dib grow shadow-5 pointer" onClick={() => showVideo(videoId)}>
                <article 
                className="br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l center"
                onClick={() => toggleModal('video')}
                >
                    <img width="320" height="180" src={imageSrc} alt="imageName" />
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt mt1">
                            <p className="dtc f6 fw6 lh-copy measure-narrow mt2 mid-gray hover-blue">
                            {videoLists.title}
                            </p>
                        </div>
                    </div>
                </article>
        </div>
    )
}

export default watchVideo;
