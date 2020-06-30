import React from 'react';

import './Layout.scss';
import {Footer} from "components/Footer";
import HeaderContainer from "containers/HeaderContainer";

export function Layout(props) {
    const { children } = props;

    return (
        <div className="layout">
            <HeaderContainer />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}