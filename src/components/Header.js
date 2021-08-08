import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


function Header() {



    return(
        <div class="container-fluid">
            <header class="d-flex justify-content-center py-3 bg-primary">
                <i class="fa fa-home" style={{"font-size": "60px", "color":"white"}}></i>
                <Link to="/" class="stretched-link"></Link>
            </header>
        </div>

    )

}

export default Header;