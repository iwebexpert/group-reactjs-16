import React, {Component} from 'react';

import './Layout.scss';
import {Messenger} from "components/Messenger";
import {Header} from "components/Header";
import {Footer} from "components/Footer";

export class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header />
                <div className="content">
                    <Messenger match={this.props.match}/>
                </div>
                <Footer />
            </div>
        );
    }
}