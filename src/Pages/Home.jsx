import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"
import { useGet } from "../Hooks/useGet"
import { trendingMoviesAPI,trendingSeriesAPI } from "../helpers";

const Home = () => {

    return (
        <div className="Home">
            <ContainerPreview url={trendingMoviesAPI} title="Peliculas que son tendencia"/>
            <ContainerPreview url={trendingSeriesAPI} title="Series que son tendencia"/>
        </div>

    )
}

export default Home;
