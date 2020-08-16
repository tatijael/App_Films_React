import React from 'react'
import Card from "./Card"

import { useSearch } from '../Hooks/useSearch'
import { useParams } from 'react-router-dom'
import Paginado from './Paginado';
import { PropagateLoader } from 'react-spinners';

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
                    <Card movie={movie} />
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

