/**
 * Created by ankho on 16.06.2020.
 */

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route, HashRouter, MemoryRouter, StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {routes} from './routes';
import {store} from './store';

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {routes.map((route, index) => <Route key={index} {...route} />)}
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);