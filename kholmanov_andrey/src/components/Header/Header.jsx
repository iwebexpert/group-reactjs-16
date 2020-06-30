/**
 * Created by Rusich on 22.06.2020.
 */

import React, {Component} from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

import './Header.scss';

export class Header extends Component {
    render()
    {
        return (
            <div className="header">
                <div className="logo">MESSANGER</div>
                <div className="user-settings">
                    <a href="/users" className="profile"><SettingsIcon /></a>
                </div>
            </div>
        );
    }
}