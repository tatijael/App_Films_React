import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Header from './Components/Header'
import "./Syle/main.scss";
import Playlist from './Components/Playlist';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/series">
            <Series />
          </Route>
    <Route exact path="/:media/:category/page/:page">
        <Playlist/>
      </Route>
    </Switch>
  </Router>

    
  )
}

export default App;
