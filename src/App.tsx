import React from 'react';
import './App.css'
import {NavLink} from "react-router-dom";
import Routers from "./routers/routers";
import {RoutePathTypes} from "./routers/types";

function App() {
    return (
        <div className="App">
            <header className="head">
                <div className="logo-wrap">
                    <h1 className="logo">Logo</h1>
                </div>
                <ul className="nav-list">
                    <li className="nav-item"><NavLink to={RoutePathTypes.ROUTE_HOME}>Home</NavLink></li>
                    <li className="nav-item"><NavLink to={RoutePathTypes.ROUTE_STORE}>Store</NavLink></li>
                    <li className="nav-item"><NavLink to={RoutePathTypes.ROUTE_BASKET}>Basket</NavLink></li>
                </ul>
            </header>
            <Routers/>
        </div>
    );
}

export default App;
