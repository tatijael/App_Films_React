import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"
import { Link } from 'react-router-dom'
import {trendingMoviesAPI} from "../helpers/index"

const Movies = () => {
    return (
        
            <div className="Home" >
            <ContainerPreview media="movie" category="popular" />
            <ContainerPreview media="movie" category="top_rated" />
            <ContainerPreview media="movie" category="upcoming" />
            <ContainerPreview media="movie" category="now_playing" />
            </div>
    )
}

export default Movies
