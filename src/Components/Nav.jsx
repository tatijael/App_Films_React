import React from 'react'
import {Route, Link, useRouteMatch, Switch} from "react-router-dom";
import Info from './MediaDetails/components/Info';
import Similar from "./MediaDetails/components/Similar";

const Nav = ({media, id}) => {

    let { path, url } = useRouteMatch();
    return (
        <div>
            Soy NAV { media}
            soy id {id}
            <div>
                <ul>
                    <li><Link to={`${url}/info`}>go to info</Link></li>
                    <li><Link to={`${url}/similares`}>go to similares</Link></li>
                    <li><Link to={`${url}/videos`}>go to videos</Link></li>
                </ul>
            </div>
            <Switch>
                <Route exact path={path}>
                <h3>Please select a topic.</h3>
                </Route>
                <Route exact path={`${path}/info`}>
                <Info/>
                </Route>
                <Route exact path={`${path}/similares`}>
                <Similar media={media} id={id}/>
                </Route>
            </Switch>
            {/* <Route  exact path={`/${media}/${id}/info`}>
                <Info />
            </Route>
            <Route exact path={`/${media}/${id}/similares`}>
                 <Similar />
            </Route>
            <Route exact path={`/${media}/${id}/videos`}>
                Videos
            </Route>
            <Route exact path={`/${media}/${id}/reparto`}>
                Reparto
            </Route> */}
                        
        </div>
    )
}

export default Nav
