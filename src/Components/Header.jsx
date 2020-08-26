import React, { useState } from 'react'
import { RiHome3Line, RiVidiconLine, RiComputerLine } from "react-icons/ri";
import { NavLink } from "react-router-dom"
import Search from './Search';


const Header = () => {
    const [menu, setMenu] = useState("home")
    
    return (
        <nav className="navbar navbar-expand">
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
                <div className="input-group">
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default Header
