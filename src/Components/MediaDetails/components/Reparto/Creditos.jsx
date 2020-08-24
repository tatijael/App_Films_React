import React from 'react'
import { useSearchInfo } from '../../../../Hooks/useSearchInfo';
import CardContainer from '../../../CardContainer';

const Creditos = ({id}) => {
    const [data] = useSearchInfo("person",id, "combined_credits");

    if(data){
    return (
        <div>
            <CardContainer cards={data.cast} media="multi"/>
        </div>
    )
    }
    return null
}

export default Creditos
