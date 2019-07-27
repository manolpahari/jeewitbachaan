import React from 'react';
import Track from './Track';
import AUDIO_DATA from './playlists';


const TrackList = ({ route }) => {
        const albumsArray = AUDIO_DATA.map((album, index) => {
             return <Track key={index} albums={album}/>
        });
        
        return (  
            <div className='flex flex-wrap justify-around'>
                    {albumsArray}
            </div>
        )
}

export default TrackList;