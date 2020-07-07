import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {initReducer} from "reducers";
import {createBrowserHistory} from "history";

import {chatBot} from "middlewares/chatBot";
import {chatBlinker} from "middlewares/chatBlinker";
import {routerMiddleware} from "connected-react-router";
import {apiMiddleware} from "redux-api-middleware";

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const history = createBrowserHistory();



const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['chats', 'profile'],
}

export function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                chatBot,
                chatBlinker,
                apiMiddleware,
            )
        ),
    )
    const persistor = persistStore(store)
    return {store, persistor}
}