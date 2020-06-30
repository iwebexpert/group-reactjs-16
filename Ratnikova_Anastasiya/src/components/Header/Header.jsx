import React, {Component} from 'react';

import {Navigation} from 'components/Navigation'

import './Header.scss';

export class Header extends Component {
    render() {
        const {name} = this.props;

        return (
            <div className="header">
                <div />
                <a href="/" className="header__title">Messenger "HiApp"</a>
                <Navigation name={name} />
            </div>
        );
    }
}