import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { apiMiddleware } from 'redux-api-middleware';

import { initReducer } from 'reducers';
import { botMiddteware } from 'middlewares/bot';
import { blinkMiddteware } from 'middlewares/blink';

export const history = createBrowserHistory();

export const store = createStore(initReducer(history), composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        //botMiddteware,
        //blinkMiddteware,
        apiMiddleware,
    )
));
