import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from 'reducers';
import {botMiddleware} from 'middlewares/botMiddleware';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        botMiddleware,
        logger
    )
);