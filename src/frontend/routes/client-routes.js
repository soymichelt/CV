import React, { Suspense } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';

import Home from './../pages/home';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={Home}
                />
            </Switch>
        </BrowserRouter>
    );
};