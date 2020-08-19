import React from 'react'
import { useSearchInfo } from '../../../../Hooks/useSearchInfo'

const InfoPerson = ({id}) => {
    const [data] = useSearchInfo("person",id);

    if(data){
        return (
            <div className="">
            <div className="card-img">
                <img
                src={`https://image.tmdb.org/t/p/w342/${data.profile_path}`}
                alt={`portada de ${data.name}`}
                />
            </div>
                <h3 className="card-title">{data.name}</h3>
                <p>{data.biography}</p>
            </div>
        )
    }
   return null;
}

export default InfoPerson
