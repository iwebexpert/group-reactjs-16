import React, {Fragment} from 'react';
import {Identification} from "components/Identification";
import {Messenger} from "components/Messenger";
import {Header} from "components/Header";
import './Layout.scss';


export class Layout extends React.Component {
    state = {
        authorName: ''
    }

    render() {
        return (
            <Fragment>
                <Identification/>
                <Header/>
                <Messenger/>
            </Fragment>
        )
    }
}