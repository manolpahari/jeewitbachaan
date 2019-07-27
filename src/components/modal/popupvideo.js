import React from 'react';
import './modal.css';

const popupVideo = ({ toggleModal, modalTriggerKey, videoData }) => {
    const src = `https://www.youtube.com/embed/${videoData}`;

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {
         modalTriggerKey==='video' ?
        <div className="popup-modal">
            <div className="center"> 
                <div>
                <iframe width="640" height="480" title="videoData.id"
                src={src}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                </div>  
            </div>  
            <div className="modal-close" onClick={toggleModal}>&times;</div>    
        </div> : null
        }
        </div>
    )
}

export default popupVideo;
