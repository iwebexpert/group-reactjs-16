import React, {Component} from 'react';

import {Navigation} from 'components/Navigation'

import './Header.scss';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div />
                <h1>Messenger "HiApp"</h1>
                <Navigation />
            </div>
        );
    }
}