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
        <div>
            <h1>Hola soy container</h1>
            {isLoading && <PropagateLoader size={60}/>}
       {/* {data && <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="..."/>} */}
        
        <Nav media="movie" id={id} />

        {/* <Link to={`/info/${id}/info`}>
        <Info />
        </Link>
        <Route path={`/info/${id}/info`}>
            info
        </Route> */}
        </div>
    )
}

export default ContainerMedia


