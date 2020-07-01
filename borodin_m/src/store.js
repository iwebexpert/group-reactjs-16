import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {initReducer} from 'reducers';

import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import messageMiddleware from 'middlewares/messageMiddleware';

export const history = createBrowserHistory();

export const store = createStore(
    initReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            messageMiddleware
        )
    )
);