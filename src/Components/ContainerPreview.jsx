import React from 'react'
import {RiArrowRightLine} from "react-icons/ri";
import { Link} from 'react-router-dom';
import Card from './Card';
import { useSearch } from '../Hooks/useSearch';
import { useTitle } from '../Hooks/useTitle';

const ContainerPreview = ({media, category}) => {
    const [data, isLoading, isError] = useSearch(media,category);
    const title = useTitle(media,category)
    if (isError) return <div>Error...</div>    

    return (
        <div className="containerPreview">
            <Link to={`/${media}/${category}/page/1`}> 
                <h4 className="title-tendencias">{title}<RiArrowRightLine color={'#5194e0'} /></h4>
            </Link>
            {
                isLoading && <div>Cargando...</div> 
            }
            {data &&
                  <div className="container-cards">
                        {
                        data.results.slice(0,5).map(movie => (
                            <Card movie={movie} />
                        ))
                        }
                    </div>
            }
        </div>

    )
}

export default ContainerPreview
