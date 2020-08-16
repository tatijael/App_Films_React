import React from 'react'
import { useParams, Link , Route} from 'react-router-dom';
import { useSearchInfo } from '../../Hooks/useSearchInfo';
import Info from './components/Info';
import { PropagateLoader } from 'react-spinners';
import Nav from '../Nav';


const ContainerMedia = () => {

    const {id} = useParams();
   
    const [data, isLoading, isError] = useSearchInfo('movie',id)
   
    return (
        <>
            <div className="poster-path">
                <div className="background-gradient"></div>
                    {data && <img className="poster-path-img"
                            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} 
                            alt="..."/>}
            </div>
            <Nav media="movie" id={id} />
        </>
    )
}

export default ContainerMedia


