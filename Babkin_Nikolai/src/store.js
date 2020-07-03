import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {initReducer} from "reducers";
import {createBrowserHistory} from "history";

import {chatBot} from "middlewares/chatBot";
import {chatBlinker} from "middlewares/chatBlinker";
import {routerMiddleware} from "connected-react-router";

export const history = createBrowserHistory();

export const store = createStore(
    initReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            chatBot,
            chatBlinker,
        )
    ),
)