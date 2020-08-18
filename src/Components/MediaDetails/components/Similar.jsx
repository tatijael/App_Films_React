import React from 'react'
import { useSearchInfo } from "../../../Hooks/useSearchInfo"
import { PropagateLoader } from 'react-spinners';
import Card from '../../Card';

const Similar = ({media, id}) => {

    const [data, isLoading, isError] = useSearchInfo(media, id, 'similar')
        
    if(isError) return <div>Error...</div>
    
    if (!data) return <PropagateLoader />
    
    if(data){

    return (
        <div className="container-cards">
            {data && 
            data.results.map(element =>{ 
                return <Card movie={element}/>
            })}
        </div>
    )}
    return null
}

export default Similar
