import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import './Layout.scss';

export function Layout( props ) {
  const { children } = props;
  return (
    <div className="layout">
      <Header/>
      <div className="page-content">
        { children }
      </div>
      <Footer/>
    </div>
  )
}