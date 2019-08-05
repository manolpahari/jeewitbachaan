import React from 'react';
import TrackList from './tracklist';
import AUDIO_DATA from './playlists';

const Player = () => {
    return(
        <>
           {
            AUDIO_DATA.map(({ id, ...otherAudioProps}) => {
               
                return <TrackList key={id} bookId={id} {...otherAudioProps}/>
            })
           }
        </>
    )
}
export default Player;