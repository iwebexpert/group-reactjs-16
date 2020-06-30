import React, {Component} from 'react';

import {Header} from 'components/Header';
import {Profile} from 'components/Profile';
import {UsersList} from 'components/UsersList';
import './Users.scss';

export class Users extends Component {
    render()
    {
        const {users, userId} = this.props;

        return (
            <div className="layout">
                <Header />
                <div className="main">
                    <Profile users={users} userId={userId} />
                </div>
            </div>
        );
    }
}