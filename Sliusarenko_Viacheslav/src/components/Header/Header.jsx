import React from 'react';
import { Link } from 'react-router-dom';
import { People, Home } from '@material-ui/icons';
import './Header.scss';

export function Header( props ) {
  return (
    <div className="header">
      <Link to={'/'}>
        <Home/>
      </Link>
      <Link to={ '/profile' }>
        <People/>
      </Link>
    </div>
  );
}