import React from 'react';

import './Layout.scss';
import {Header} from "components/Header";
import {Footer} from "components/Footer";

export function Layout(props) {
    const { children } = props;

    return (
        <div className="layout">
            <Header />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
}