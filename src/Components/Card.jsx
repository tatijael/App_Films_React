import React from 'react'

const Card = () => {
    return (
        <div className="wrapper-card">
            <div className="card " style={{width: "18rem"}}>
                <img 
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/wrLC5kx0nEq9U0MyJD7dnOT6m5F.jpg`} 
                className="card-img-top" alt="..." />
            </div>
                <h6 className="card-title" 
                style={{color:"#dcddde"}}>Bohemian Rhapsody</h6>
        </div>
    )
}

export default Card
