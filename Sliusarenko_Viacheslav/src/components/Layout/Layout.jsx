import React from 'react';
import HeaderContainer from 'containers/HeaderContainer';
import { Footer } from 'components/Footer';

import './Layout.scss';

export function Layout( props ) {
  const { children } = props;
  return (
    <div className="layout">
      <HeaderContainer/>
      <div className="page-content">
        { children }
      </div>
      <Footer/>
    </div>
  )
}