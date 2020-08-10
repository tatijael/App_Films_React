import React from 'react'
import Card from "./Card"
import {RiArrowRightLine, RiSearchLine} from "react-icons/ri";

const ContainerPreview = ({title}) => {
    return (
        <>
            <h4>{title}<RiArrowRightLine color={'#5194e0'} /> </h4>
            <div className="d-flex justify-content-around">
                <Card /> 
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default ContainerPreview
