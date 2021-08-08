import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import allBeersPic from "../assets/beers.png"
import randomBeerPic from "../assets/random-beer.png"
import newBeerPic from "../assets/new-beer.png"


function HomePage() {

    return(

        <div>
            <div className="card" style={{"width": "18rem"}}>
                <img src={allBeersPic} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 class="card-title">All beers</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <Link to="/beers" class="stretched-link"></Link>
            </div>
            <div className="card" style={{"width": "18rem"}}>
                <img src={randomBeerPic} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 class="card-title">Random Beer</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <Link to="/random-beer" class="stretched-link"></Link>
            </div>
            <div className="card" style={{"width": "18rem"}}>
                <img src={newBeerPic} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 class="card-title">New Beer</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <Link to="/new-beer" class="stretched-link"></Link>
            </div>

        </div>
        
    )
}

export default HomePage;