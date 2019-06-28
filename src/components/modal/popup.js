import React from 'react';
import Contact from './contact';
import './modal.css';

const popup = ({ toggleModal, modalTriggerKey, videoData }) => {
    console.log(videoData);
    return (
        <div>
        {
            modalTriggerKey==='contact' &&
            <div className="popup-modal">
                <div className="center"> 
                    <Contact/>  
                </div>      
                <div className="modal-close" onClick={toggleModal}>&times;</div>    
            </div>
            }
        </div>
    )
}

export default popup;
