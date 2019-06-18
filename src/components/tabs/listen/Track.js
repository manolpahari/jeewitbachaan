import React from 'react';

const Track = ({ title, url, length }) => {
    return (  
        <div>
            <h5>{title}</h5>
            <audio src={url} controls />
            <p>{length}</p>
        </div>
    )
}

export default Track;