import { createStore, compose } from 'redux';

import rootReducer from 'reducers';

export function store() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
  return createStore(rootReducer, composeEnhancers() );
}