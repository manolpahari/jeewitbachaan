import React from 'react'

const video = ({ videoList, toggleModal, showVideo, playIcon }) => {
         const videoId = videoList.id.videoId;
         const width = videoList.snippet.thumbnails.medium.width;
         const height = videoList.snippet.thumbnails.medium.height;

         const imageSrc = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
         return (
                 <div className="video-card dib grow shadow-5 pointer" onClick={() => showVideo(videoId)}>
                     <article 
                     className="dark-gray b--black-10 center"
                     onClick={() => toggleModal('video')}
                     >
                         <img width={width} height={height} src={imageSrc} alt="imageName" />
                         <img src={playIcon} width="68" height="48" 
                              className="play-icon pointer grow" 
                              alt="play-icon"
                              style={{position:'absolute', top:'30%', left:'35%'}}/>
                         <div className="pa2 ph3-ns pb3-ns">
                             <div className="dt mt1">
                                 <p className="dtc f6 fw6 lh-copy measure-narrow mt2 mid-gray hover-blue">
                                 {videoList.snippet.title}
                                 </p>
                             </div>
                         </div>
                     </article>
             </div>
         )
}

export default video
