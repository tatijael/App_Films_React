import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"
import { Link } from 'react-router-dom'
import Playlist from '../Components/Playlist'

function Movies() {
    return (
        <Link to="/playlist">
            <div >
                <ContainerPreview title="Peliculas Populares"/>
                <Playlist />
                <ContainerPreview title="Peliculas con Mejores Criticas"/>
                <ContainerPreview title="Peliculas a estrenarse"/>
                <ContainerPreview title="Peliculas en Cine" />
            </div>
        </Link>
    )
}

export default Movies
