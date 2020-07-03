import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from "components/Router";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import {store} from './store';
import {history} from "./store";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Router/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
)