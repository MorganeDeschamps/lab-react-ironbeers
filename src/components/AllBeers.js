import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Header from "./Header"



function AllBeers() {

    const [beersState, setbeersState] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(result => {
            return result.data.map((beer) => {
                const { _id: beerId, image_url, name, tagline, contributed_by} = beer;
                return {beerId, image_url, name, tagline, contributed_by}
            })
        }).then(beersArray => {
            setbeersState(beersArray)
        })
        .catch(err => console.log(err))

    }, [])


    return(
        <div>
            <Header />
            {beersState.map((beer, index) => {
                return (
                    <div key={index} className="beerCard card">
                        <div class="row">
                          <div class="col-3">
                            <img src={beer.image_url} class="img-fluid rounded-start" alt={beer.name}/>
                          </div>
                          <div class="col-9">
                            <div class="card-body text-align-left">
                              <h5 class="card-title">{beer.name}</h5>
                              <p class="card-text text-muted">{beer.tagline}</p>
                              <p class="card-text"><small >Created by: {beer.contributed_by}</small></p>
                            </div>
                          </div>
                        </div>
                        <Link to={`/beers/${beer.beerId}`} class="stretched-link"></Link>
                    </div>
                )
            })}
        </div>
    )

}

export default AllBeers;