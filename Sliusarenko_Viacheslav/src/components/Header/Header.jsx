import React from 'react';
import { Link } from 'react-router-dom';
import { People, Home } from '@material-ui/icons';

import './Header.scss';

export function Header( props ) {
  const { username } = props;
  return (
    <div className="header">
      <Link to={'/'}>
        <Home/>
      </Link>
      <Link to={ '/profile' }>
        { username } <People/>
      </Link>
    </div>
  );
}