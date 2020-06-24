import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { People, Home } from '@material-ui/icons';
import { UserContext } from "../../context/UserContext";

import './Header.scss';

export function Header( props ) {
  const { author } = useContext( UserContext );

  return (
    <div className="header">
      <Link to={'/'}>
        <Home/>
      </Link>
      <Link to={ '/profile' }>
        { author }&nbsp;<People/>
      </Link>
    </div>
  );
}