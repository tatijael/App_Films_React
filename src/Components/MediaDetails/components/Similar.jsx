import React from 'react'
import Playlist from '../../Playlist';
import { useSearchInfo } from "../../../Hooks/useSearchInfo"
import Card from '../../Card';

const Similar = ({media, id}) => {
    const [data, isLoading, isError] = useSearchInfo(media, id, 'similar')
    console.log(data);
    if(data){

    
    return (
        <div>{
            data.results.map(element =>{ 
                return <Card movie={element}/>
            })}
        </div>
    )}
    return null
}

export default Similar
