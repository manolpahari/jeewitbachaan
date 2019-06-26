import React from 'react';
import Track from './Track';

const TrackList = ({ playlists }) => {
    return (  
        <div className=''>
            {
                playlists.map((audiobook, i) => {
                    return (
                        <Track 
                            key={i}
                            id={playlists[i].id}
                            title={playlists[i].title}
                            url={playlists[i].url}
                            length={playlists[i].length}
                        />
                    )
                }
            )}
        </div>
    )
}

export default TrackList;