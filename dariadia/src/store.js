import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import { initReducer } from "reducers";
import { botMiddteware } from "middlewares/bot";

export const history = createBrowserHistory();

export const store = createStore(
  initReducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), createLogger(), botMiddteware)
  )
);
