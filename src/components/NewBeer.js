import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Header from "./Header"

function NewBeer() {



    return(
        <div>
            <Header />
            <form>
                <div class="mb-3">
                  <label for="name" class="form-label">Beer name: </label>
                  <input type="text" class="form-control" id="beer-name"/>
                </div>
                <div class="mb-3">
                  <label for="tagline" class="form-label">Tagline: </label>
                  <input type="text" class="form-control" id="beer-tagline"/>
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description: </label>
                  <input type="text" class="form-control" id="beer-description"/>
                </div>
                <div class="mb-3">
                  <label for="first_brewed" class="form-label">First brewed: </label>
                  <input type="text" class="form-control" id="beer-first-brewed"/>
                </div>
                <div class="mb-3">
                  <label for="brewers_tips" class="form-label">Brewer's tips: </label>
                  <input type="text" class="form-control" id="beer-brewers-tips"/>
                </div>
                <div class="mb-3">
                  <label for="attenuation_level" class="form-label">Attenuation level: </label>
                  <input type="number" class="form-control" id="beer-attenuation-level"/>
                </div>
                <div class="mb-3">
                  <label for="contributed_by" class="form-label">Contributed by: </label>
                  <input type="text" class="form-control" id="beer-contributed-by"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )

}

export default NewBeer;