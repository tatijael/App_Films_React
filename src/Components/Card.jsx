import React from 'react';
import {Link} from "react-router-dom";

const Card = ({movie}) => {
    console.log(movie);
    return (
        <Link to={`/movie/${movie.id}/info`}>
        <div className="wrapper-card">
            <div className="card" style={{width: "13rem"}}>
                <img 
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`} 
                className="card-img-top" alt="..." />
            <div className="titles">
                <h6 className="card-title" 
                style={{color:"#dcddde"}}>{movie.title||movie.name}</h6>
            </div>
            </div>
        </div>
        </Link>
    )
}

export default Card
