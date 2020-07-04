import { createLogger } from "redux-logger";
import { apiMiddleware } from 'redux-api-middleware';
import { createStore, compose, applyMiddleware } from 'redux';

import { botMiddleware, notifyMiddleware } from 'middlewares';

import rootReducer from 'reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewaresList = [ apiMiddleware, botMiddleware, notifyMiddleware, createLogger() ]

export function store() {
  return createStore(
    rootReducer,
    composeEnhancers( applyMiddleware( ...middlewaresList ) )
  );
}