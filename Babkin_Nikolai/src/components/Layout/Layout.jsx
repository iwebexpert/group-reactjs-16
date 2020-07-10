import React, {Fragment} from 'react';
import './Layout.scss';
import {ProfileRedux} from "containers/ProfileContainer";

export class Layout extends React.Component {
    render() {
        return (
            <Fragment>
                <ProfileRedux/>
            </Fragment>
        )
    }
}