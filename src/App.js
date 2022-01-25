import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './component/navbar';
import Character from './pages/character';
import DetailsCharacter from './pages/detailsCharachter';
import DetailsMovies from './pages/detailsMovie';
import Home from './pages/home';
import Movie from './pages/movie';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/film/:id'>
          <DetailsMovies />
        </Route>
        <Route path='/film'>
          <Movie />
        </Route>
        <Route path='/character/:id'>
          <DetailsCharacter />
        </Route>
        <Route path='/character'>
          <Character/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
