import React from 'react'
import { useSearchInfo } from "../../../Hooks/useSearchInfo"
import { PropagateLoader } from 'react-spinners';
import { useParams } from 'react-router-dom';


const Info = () => {

    const {id} = useParams();
    const [data, isLoading, isError] = useSearchInfo("movie", id)
    console.log("asdfasdf", data)
    
    return (
        <div>
        {isLoading && <PropagateLoader size={60}/>}
            {data && 
            <div>
            <h1>{data.original_title}</h1>
            {/* <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="..." /> */}
            </div>
            
            }
            
          
            <p>Duracion</p>
            <p>Géneros</p>
            <p>Presupuesto</p>
            <p>Recaudacion</p>
            <p>Produccion</p>
        </div>
    )
}

export default Info