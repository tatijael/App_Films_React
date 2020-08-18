import React from 'react'

import { PropagateLoader } from 'react-spinners';
import CardContainer from '../../../CardContainer';
import { useSearch } from '../../../../Hooks/useSearch';

const Reparto = ({media, id}) => {

    const [data, isLoading, isError] = useSearch(media,id,'credits')
    
    if(isError) return <div>Error...</div>
    
    if (!data) return <PropagateLoader />

    if(data){

    return (
        <div className="container-cards">
            {data && <CardContainer media={media} cards={data.cast}/>}
        </div>
    )
    }

}

export default Reparto
