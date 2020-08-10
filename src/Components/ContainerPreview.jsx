import React from 'react'
import Card from "./Card"
import {RiArrowRightLine} from "react-icons/ri";
import CardContainer from './CardContainer';
import Playlist from './Playlist';
import { Link } from 'react-router-dom';

const ContainerPreview = ({title}) => {
    return (
        <div className="containerPreview">
           <Link to="/playlist"> 
            <h4 className="title-tendencias">{title}<RiArrowRightLine color={'#5194e0'} /></h4>
           </Link>
            <CardContainer />

        </div>

    )
}

export default ContainerPreview
