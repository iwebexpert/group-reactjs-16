import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import { UserContext } from './context/UserContext';

function App( props ) {
  const [author, setAuthor] = useState('');
  const value = { author, setAuthor };

  return (
    <UserContext.Provider value={ value }>
      <BrowserRouter>
        <Switch>
          { routes.map( ( route, idx ) => (
            <Route key={ idx } { ...route } />
          )) }
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

ReactDom.render( <App/>,
  document.querySelector('#root')
);