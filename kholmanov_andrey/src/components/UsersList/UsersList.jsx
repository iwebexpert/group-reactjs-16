import React, {Component} from 'react';

import './UsersList.scss';

export class UsersList extends Component {
    render()
    {
        const {users, userId} = this.props;

        return (
            <div className="users-list">
                Список
            </div>
        );
    }
}