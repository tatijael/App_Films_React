import React from 'react'
import {Route, Link, useRouteMatch, Switch} from "react-router-dom";
import Info from './MediaDetails/components/Info';
import Similar from "./MediaDetails/components/Similar";

const Nav = ({media, id}) => {

    let { path, url } = useRouteMatch();
    return (
        <div>
            <div>
                <ul className="nav-list">
                    <li className="list"><Link to={`${url}/info`}>INFO</Link></li>
                    <li className="list"><Link to={`${url}/reparto`}>REPARTO</Link></li>
                    <li className="list"><Link to={`${url}/similares`}>SIMILARES</Link></li>
                    <li className="list"><Link to={`${url}/videos`}>VIDEOS</Link></li>
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
                <Route exact path={`${path}/reparto`}>
                <Similar media={media} id={id}/>
                </Route>
            </Switch>
                        
        </div>
    )
}

export default Nav
