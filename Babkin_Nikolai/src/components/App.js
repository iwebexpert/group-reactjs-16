import React from 'react';

import {Messenger} from "./Messenger";
import {Identification} from "./Identification";

export class App extends React.Component {

    state = {
        authorName: ''
    }

    componentDidUpdate() {
        console.log()
    }

    render() {
        return (
            <div className="main-wrapper">
                <Identification/>
                <Messenger/>
            </div>
        )
    }
}