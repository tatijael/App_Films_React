import React from 'react'

const EpisodeCard = ({img, title, overview, episodeNumber}) => {
   
    return (
        <div className="episode-card">
            <img src={`https://image.tmdb.org/t/p/w400/${img}`} 
                alt={`title imagen`}/>
            <p className="title-episode">
                EP{episodeNumber} 
            </p>
            -
            <span className="title">{title}</span>
            <p className="overview-episode">{overview}</p>
        </div>
    )
}

export default EpisodeCard
