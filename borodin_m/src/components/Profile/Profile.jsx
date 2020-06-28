import React, {Component} from 'react';

import './Profile.sass';

export class Profile extends Component {
    render() {
        const {name, birthday, city, email} = this.props.profile.profile;

        return (
            <div className="profile-wrap">
                <div><span className="profile-label">Имя: </span>{name}</div>
                <div><span className="profile-label">Дата рождения: </span>{birthday}</div>
                <div><span className="profile-label">Город: </span>{city}</div>
                <div><span className="profile-label">Емэйл: </span>{email}</div>
            </div>
        );
    }
}