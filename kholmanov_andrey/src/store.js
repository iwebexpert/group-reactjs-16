import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //localStorage

import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';

import {initReducer} from 'reducers';
import {botMiddleware} from 'middlewares/botMiddleware';

export const history = createBrowserHistory();

// export const store = createStore(initReducer(history), composeWithDevTools(
//     applyMiddleware(
//         routerMiddleware(history),
//         createLogger(),
//         botMiddleware
//     )));

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['chats', 'user'],
};

export function initStore(){
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                createLogger(),
                botMiddleware,
                apiMiddleware,
                thunk,
            )));

    const persistor = persistStore(store);
    return {store, persistor};
}