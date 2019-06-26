import React from 'react';

const Track = ({ id, title, url, length }) => {
    return (  
        <div>
            <div className='flex justify-around track-item'>
                <p className='w-5 pa2'>{id}.</p>
                <h5 className='w-40 pa2'>{title}</h5>
                <audio className='w-40 pa2' src={url} controls />
                {/* <p className='w-15 pa2 tc'>{length}</p> */}
            </div>
        </div>
    )
}

export default Track;