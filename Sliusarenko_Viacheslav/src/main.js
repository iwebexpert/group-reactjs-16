import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { store } from './store';
import { routes } from './routes';

function App() {
  return (
    <Provider store={ store() }>
      <BrowserRouter>
        <Switch>
          { routes.map( ( route, idx ) => (
            <Route key={ idx } { ...route } />
          )) }
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render( <App/>,
  document.querySelector('#root')
);