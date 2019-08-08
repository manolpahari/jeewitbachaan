import React from 'react';
import PlayerController from './player-controller';
import Tracks from './tracks';

let song = new Audio('https://jeewitbachan-assets.s3.ap-south-1.amazonaws.com/audiobooks/col/col_1.mp3'
);
class TrackList extends React.Component {
    constructor(props){
        super(props);

        this.state={
            src: '',
            currentTrackTitle: '',
            isPlaying: false,
            bookId: ''
        }
    }


    componentDidUpdate() {
        //Now Playing Status Bar
        song.addEventListener('timeupdate', () => {
        let fillBar = '';
        this.state.bookId === 1 ? fillBar = document.getElementById("fill") : fillBar = document.getElementById("fill2")
        if(fillBar){
            let position = song.currentTime/ song.duration;
            fillBar.style.width = position * 100 + '%';
        }else{
            return null;
        }
        });
    };

    render() {
        const { currentTrackTitle, isPlaying, src, currentTrackId } = this.state;
        const { bookTitle, tracks, bookId, introTrackUrl } = this.props;
     
        //Function to play or pause the audio Book 1
        const playOrPause = (src, title, id, bookId) => {
            let newSong = new Audio(src);
            if(song.src === newSong.src) {
                if(song.paused) { 
                    song.play();
                    
                }else{
                    song.pause();
                }
            }else {  
                song.pause();
                song = newSong;
                song.play();
            }
            //Set isPlaying state true or false when playing
            if(!song.paused) {
                this.setState({...this.state, isPlaying: true})
            }
            if(song.paused) {
                this.setState({...this.state, isPlaying: false})
            }
            

            //Set currentTrackTitle State
            this.setState({
                currentTrackTitle: title,
                src: src,
                currentTrackId: id,
                bookId: bookId
            })
        }

        return (  
            <div className='audio-list-container'>
                {/* Dispaly AudioBook 1*/}
                <div className="player-wrapper">
                <PlayerController currentTrackTitle={currentTrackTitle}
                                    src={src}
                                    isPlaying={isPlaying}
                                    currentTrackId={currentTrackId}
                                    playOrPause={playOrPause}
                                    bookId={bookId}
                                    handleBookId={this.handleBookId}
                                    bookTitle = {bookTitle}
                                    introTrackUrl = {introTrackUrl}
                                    />
                <Tracks tracks={tracks} 
                playOrPause={playOrPause} 
                isPlaying={isPlaying} 
                currentTrackId={currentTrackId} 
                bookId={bookId}/>
                </div>
            </div>

         )

    }
}

export default TrackList;