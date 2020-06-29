/**
 * Created by Rusich on 22.06.2020.
 */

import React, {Component} from 'react';

import {Header} from 'components/Header';
import {Messenger} from 'components/Messenger';

import './Layout.scss';

export class Layout extends Component {
    render()
    {
        return (
            <div className="layout">
                <Header />
                <div className="main">
                    <Messenger data={this.props} />
                </div>
            </div>
        );
    }
}