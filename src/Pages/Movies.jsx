import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"
import { Link } from 'react-router-dom'
import {trendingMoviesAPI} from "../helpers/index"

const Movies = () => {
    return (
        <Link to="/playlist">
            <div className="Home" >
                <ContainerPreview url={trendingMoviesAPI} title="Peliculas que son Tendencia"/>
                <ContainerPreview url={trendingMoviesAPI} title="Peliculas que son Tendencia"/>
                <ContainerPreview title="Peliculas a estrenarse"/>
                <ContainerPreview title="Peliculas en Cine" />
            </div>
        </Link>
    )
}

export default Movies
