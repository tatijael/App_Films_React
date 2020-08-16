import React from 'react'
import { PropagateLoader } from 'react-spinners';
import { useParams, Link } from 'react-router-dom'

import Card from "./Card"
import { useSearch } from '../Hooks/useSearch'
import Paginado from './Paginado';

function Playlist() {
    const {media,category,page} = useParams();
    const [data, isLoading, isError] = useSearch(media, category,page)

    if (isError) return <div>Error...</div> 

    if(isLoading || !data) return (<PropagateLoader size={15}/>);

    if(data){
    
    return (        
        <div className="Home">
        <div className="container-cards">
                {
                data.results.map(movie => (
                    <Link to={`/${media}/${movie.id}/info`}>
                        <Card movie={movie} />
                    </Link>
                ))
                }
            </div>
            <Paginado className="paginadoContainer" 
                media={media} 
                category={category} 
                page={page} 
                totalPage={data.total_pages}/>
        </div>
        )
    }
}

export default Playlist

