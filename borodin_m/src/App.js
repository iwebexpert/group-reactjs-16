import React, {Component} from 'react';
import {Messenger} from './components/Messenger';

export class App extends Component {
    state = {

    };

    render() {
        return (
            <div className="container">
                <h1 className="msg-title">Болталка</h1>
                <Messenger/>
            </div>
        );
    }
}