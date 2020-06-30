/**
 * Created by ankho on 16.06.2020.
 */

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {routes} from './routes';

ReactDom.render(
    <BrowserRouter>
        <Switch>
            {routes.map((route, index) => <Route key={index} {...route} />)}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'),
);