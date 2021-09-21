import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {HOME_ROUTE} from "./shared/constants/appRoutes";
import {publicRoutes} from "./routing/AppRouter";

export const App = () => {

    const mappedPublicRoutes = publicRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)

    return (
        <Switch>
            {mappedPublicRoutes}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    )
}
