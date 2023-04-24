import React from 'react';
import {useRoutes} from "react-router-dom";
import {RoutePathTypes} from "./types";
import Home from "../pages/Home/Home";
import Store from "../pages/Store/Store";
import Basket from "../pages/Basket/Basket";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Routers = () => {
    return useRoutes([
        {path: RoutePathTypes.ROUTE_HOME, element: <Home/>},
        {path: RoutePathTypes.ROUTE_STORE, element: <Store/>},
        {path: RoutePathTypes.ROUTE_BASKET, element: <Basket/>},
        {path: RoutePathTypes.ROUTE_PAGE_NOT_FOUND, element: <PageNotFound/>},
    ])
};

export default Routers;