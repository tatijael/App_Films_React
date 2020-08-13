import React from 'react'

const Card = ({movie}) => {
    return (
        <div className="wrapper-card">
            <div className="card" style={{width: "14rem"}}>
                <img 
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`} 
                className="card-img-top" alt="..." />
            </div>
                <h6 className="card-title " 
                style={{color:"#dcddde"}}>{movie.original_title||movie.original_name}</h6>
        </div>
    )
}

export default Card
