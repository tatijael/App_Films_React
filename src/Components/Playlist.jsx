import React from 'react'
import Card from "./Card"
import { useSearch } from '../Hooks/useSearch'
import { useParams } from 'react-router-dom'
import Paginado from './Paginado';

function Playlist() {
    const {media,category,page} = useParams();
    const [data, isLoading, isError] = useSearch(media, category,page)

    if (isError) return <div>Error...</div> 

    if(isLoading || !data) return "Cargando ...";

    if(data){
    
    return (        
        <div>
           <div className="container-cards">
                {
                data.results.map(movie => (
                    <Card movie={movie} />
                ))
                }
            </div>
            <Paginado media={media} category={category} page={page} totalPage={data.total_pages}/>
        </div>
        )
    }
}

export default Playlist

