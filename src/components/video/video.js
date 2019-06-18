import React from 'react'

const video = ({ video }) => {
    const videoId = video.id.videoId;
    const videoHeight = video.snippet.thumbnails.high.height;
    const videoWidth = video.snippet.thumbnails.high.width;
    return (
        <div className="ma2 dib grow shadow-5 pointer">
        <article className="br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l center">
            <iframe width={videoWidth} height={videoHeight} src={`https://www.youtube.com/embed/${videoId}`} 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                    <p className="dtc f6 lh-copy measure mt2 mid-gray">
                    {video.snippet.title}
                    </p>
                    </div>
                </div>
        </article>
        </div>
    )
}

export default video
