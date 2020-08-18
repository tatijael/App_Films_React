import React from 'react'
import { useSearchInfo } from '../../../Hooks/useSearchInfo'
import { PropagateLoader } from 'react-spinners';

const Reparto = ({media, id}) => {

    const [data, isLoading, isError] = useSearchInfo(media,id, 'credits')
    console.log("dataa de reparto",data)
    if(isError) return <div>Error...</div>
    
    if (!data) return <PropagateLoader />

    if(data){

    return (
        <div className="wrapper-card">
            <div className="card-img">
                <img 
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${data.cast.map(profile => {
                return profile.profile_path
                })}`} 
                    className="card-img-top" alt="..." />
            </div>
            <h6 className="card-title" >{data.cast.map(profile => {
                return profile.name
            })}</h6>
            <p>{data.cast.map(profile =>{
                return profile.character
            })} </p>
        </div>
    )
    }
}

export default Reparto
