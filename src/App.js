import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';


import HomePage from './components/HomePage';
import AllBeers from "./components/AllBeers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from './components/SingleBeer';


function App() {


  return (
    <div className="App">

      <BrowserRouter>

        <Switch>
          
          <Route path="/new" component={NewBeer}/>
          <Route exact path="/beers/random" component={RandomBeer}/>
          <Route path="/beers/:beerId" component={SingleBeer}/>
          <Route path="/beers" component={AllBeers}/>
          <Route path="/" component={HomePage}/>
         
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
