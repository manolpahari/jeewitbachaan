import React from 'react';
import Track from './Track';
import { audioBook1, audioBook2 } from './playlists';


const TrackList = () => {
    const albums = [audioBook1, audioBook2];
        const albumsArray = albums.map( (album, index) => {
             return <Track key={index} albums={album}/>
        })
        return (  
            <div className='flex flex-wrap justify-around'>
                    {albumsArray}
            </div>
        )
}

export default TrackList;