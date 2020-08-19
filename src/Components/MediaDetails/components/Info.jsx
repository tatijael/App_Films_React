import React from 'react'
import { useSearchInfo } from "../../../Hooks/useSearchInfo"
import { PropagateLoader } from 'react-spinners';


const Info = ({media, id}) => {

    const [data, isLoading, isError] = useSearchInfo(media, id);
    if(isError) return <div>Error...</div>
    
    if (!data) return <PropagateLoader />

    if(data) {
        
        return (
            <div className="wrapper-info">
            {media === "movie" ?
                <div className="movie-img">
                    <div className="container-img">
                        <img className="info-img" 
                            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} 
                            alt="..." /> 
                    </div>
                    <div className="movie-info">
                        <h2>{data.original_title}</h2>
                        <p>{data.overview}</p>
                        <p>Duracion: {data.runtime} min.</p>
                        <p>Generos: {data.genres.map(genere => {
                                        return <span>{genere.name}</span>
                                    })}
                        </p>
                        <p>Presupuesto: {data.budget}</p>
                        <p>Recaudación: {data.revenue}</p>
                        <p>Producción : {data.production_companies.map(company => {
                                        return <span>{company.name}</span>
                        })}</p>
                    </div>
                </div>
                : 
                <div className="movie-img">
                <div className="container-img">
                    <img className="info-img" 
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} 
                        alt="..." /> 
                </div>
                <div className="movie-info">
                    <h2>{data.original_name}</h2>
                    <p>{data.overview}</p>
                    <p>Temporadas: {data.number_of_seasons}</p>
                    <p>Episodios: {data.number_of_episodes}</p>
                    <p>Duración: {data.episode_run_time[0]}</p>
                    <p>Géneros: {data.revenue}</p>
                    <p>Produccion : {data.production_companies.map(company => {
                                    return <span>{company.name}</span>
                    })}</p>
                </div>
            </div>
            }
            </div>
        )  
    }
}


export default Info