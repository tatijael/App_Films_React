import React from 'react'
import {RiArrowRightLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useGet } from "../Hooks/useGet"
import Card from './Card';

const ContainerPreview = ({title, url}) => {
    const [data, isLoading, isError] = useGet(url)

    if (isError) return <div>Error...</div>    

    return (
        <div className="containerPreview">
            <Link to="/playlist"> 
                <h4 className="title-tendencias">{title}<RiArrowRightLine color={'#5194e0'} /></h4>
            </Link>
            {
                isLoading || !data 
                ? <div>Cargando...</div> 
                : <div className="container-cards">
                {
                data.slice(0,5).map(movie => (
                    <Card movie={movie} />
                ))
                }
            </div>
            }
        </div>

    )
}

export default ContainerPreview
