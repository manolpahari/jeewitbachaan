import React from 'react';
import Track from './Track';

const Listen = ({ playlists }) => {
    return (  
        <div>
            {
                playlists.map((audiobook, i) => {
                    return (
                        <Track 
                            key={i}
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

export default Listen;