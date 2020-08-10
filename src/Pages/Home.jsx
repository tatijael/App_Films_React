import React from 'react'
import ContainerPreview from "../Components/ContainerPreview"


const Home = () => {
    return (
        <div className="Home">
            <ContainerPreview title="Peliculas que son Tendencia"/>
            <ContainerPreview title="Series que son Tendencia"/>
        </div>
    )
}

export default Home;
