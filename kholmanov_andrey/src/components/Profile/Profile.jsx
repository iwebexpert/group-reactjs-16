import React, {Component} from 'react';

import {Header} from 'components/Header';
import './Profile.scss';

export class Profile extends Component {
    render()
    {
        const {users, userId} = this.props;
        console.log(users[userId], userId);
        return (
            <div className="profile">
                Профиль
            </div>
        );
    }
}