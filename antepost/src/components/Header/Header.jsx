import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

export class Header extends Component {
    render() {
        return (
            <header>
                <h1>Messenger App</h1>
                <ul className="menu">
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </header>
        );
    }
}
