import React, { useState } from 'react'
import { RiHome3Line, RiVidiconLine, RiComputerLine, RiSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom"


const Header = () => {
    const [menu, setMenu] = useState("home")
    
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" >
                <li className="nav-item" >
                    <NavLink 
                    onClick={() => setMenu('home')}
                    className="nav-link" to="/" 
                    >
                        <RiHome3Line  name='home' color={menu === 'home' ? '#5194e0' :'#fafafa'} size={27} />
                    </NavLink>
                </li>
                <li className="nav-item" style={{marginLeft: 15}}>
                    <NavLink 
                    onClick={() => setMenu('movies')}
                    className="nav-link" to="/movies"                   
                    >
                        <RiVidiconLine name="movies" color={menu === 'movies' ? '#5194e0' :'#fafafa'} size={27}/>
                    </NavLink>
                </li>
                <li className="nav-item" style={{marginLeft: 15}} >
                    <NavLink 
                    onClick={() => setMenu("series")}
                    to="/series" 
                    className="nav-link">
                        <RiComputerLine name="series"  color={menu === 'series' ? '#5194e0' :'#fafafa'} size={27} />
                    </NavLink>
                </li>
            </ul>
            <form className="form">
                <div className="input-group">
                    <div className="input-group-prepend ">
                        <span className="input-group-text input-grey"><RiSearchLine style={{marginLeft: 15}} color={'#fafafa'}size={27} className="icons-input" /></span>
                        <input type="text"  className="form-control input-grey" placeholder="Busqueda..."/>
                    </div>
                </div>
            </form>
            </div>
        </nav>
    )
}

export default Header
