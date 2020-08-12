import React from 'react'
import Card from "./Card"
import {useGet} from "../Hooks/useGet"
import {API_KEY, playlistMoviesAPI,} from "../helpers/index"

function Playlist() {
    const [data, isLoading, isError] = useGet(`${playlistMoviesAPI}1?api_key=${API_KEY}`)
   

    if (isError) return <div>Error...</div> 

    return (
        <div>
            {
                isLoading || !data 
                ? <div>Cargando...</div> 
                : <div className="container-cards">
                {
                data.map(movie => (
                    <Card movie={movie} />
                ))
                }
            </div>
            }
        </div>
    )
        }

export default Playlist

