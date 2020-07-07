/**
 * Created by ankho on 16.06.2020.
 */

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';

import {routes} from './routes';
import {initStore, history} from './store';

const {store, persistor} = initStore();

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ConnectedRouter history={history}>
                <Switch>
                    {routes.map((route, index) => <Route key={index} {...route} />)}
                </Switch>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
document.getElementById('root')
);