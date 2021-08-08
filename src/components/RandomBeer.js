import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Header from "./Header"

function RandomBeer() {

    const beerObject = {
        image_url: "",
        name: "",
        tagline: "",
        first_brewed: "",
        attenuation_level: "",
        description: "",
        contributed_by: ""
    }

    const [beerState, setBeerState] = useState(beerObject)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(result => {
                const {
                    image_url,
                    name,
                    tagline,
                    first_brewed,
                    attenuation_level,
                    description,
                    contributed_by
                } = result.data
                setBeerState({image_url,name,tagline,first_brewed,attenuation_level,    description,contributed_by})
        })
        .catch(err => console.log(err))
  
    }, [])
  

    return(

        <div>
            <Header />
            <div class="card mb-3">
                <img src={beerState.image_url} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{beerState.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{beerState.tagline}</h6>

                  <p class="card-text">Description: {beerState.description}</p>
                  <p class="card-text">First brewed: {beerState.first_brewed}</p>
                  <p class="card-text">Attenuation level: {beerState.attenuation_level}</p>


                  <p class="card-text"><small class="text-muted"> By {beerState.contributed_by}</small></p>
                </div>
            </div>
        </div>
    )

}

export default RandomBeer;