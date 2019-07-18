import React from 'react';
import Track from './Track';
import { audioBook1, audioBook2 } from './playlists';
import { ETIME } from 'constants';

const TrackList = () => {
    const albums = [audioBook1, audioBook2];
        const albumsArray = albums.map( (album, index) => {
            let count= 0;
            let song = new Audio(album[count].url);
             // const newFunc = (src) => {
             //     currentSong = new Audio(src);
             //     console.log('currentSong', currentSong);
             //     if(this.state.song !== currentSong) {
             //        return this.setState({ ...this.state, song: currentSong })
             //     }
             //     console.log('current state' ,this.state.song)
             // }
     
             //Function to play or pause the audio Book 1
              const playOrPause = (src) => {
                let newSong = new Audio(src);
                console.log('newSong', newSong);
                if(song.src === newSong.src) {
                     console.log('song', song)
                     if(song.paused) { 
                         song.play();
                     }else{
                         song.pause();
                     }
                   
                }else {  
                    song.pause();
                    song = newSong;
                    song.play();
                    console.log('you are trying to play new audio track')
                }
             };
     
             //Timeupdate eventlistener
             const timeUpdate = (e) => {
                 let position = song.currentTime / song.duration
                 e.target.id.value = position + '%';
                 console.log('position');
             };
    
             //Function to play or pause the audio Book 2
            //  const playOrPause2 = (src) => {
            //     let newSong = new Audio(src);
            //     console.log('newSong', newSong);
            //     if(newSong && song2.src === newSong.src) {
            //          console.log('song', song2)
            //          if(song2.paused) { 
            //              song2.play();
            //          }else{
            //              song2.pause();
            //          }
                   
            //     }else {  
            //         song2.pause();
            //         song2 = newSong;
            //         newSong.play();
            //         console.log('you are trying to play new audio track')
            //     }
            //  };
            
             return <Track key={index} playOrPause={playOrPause} albums={album} timeUpdate={timeUpdate}/>
        })
        return (  
            <div className='flex flex-wrap justify-around'>
                    {albumsArray}
            </div>
        )
}

export default TrackList;