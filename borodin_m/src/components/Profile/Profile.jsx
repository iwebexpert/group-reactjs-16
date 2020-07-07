import React, {Component} from 'react';

import './Profile.sass';

export class Profile extends Component {
    render() {
        const {name, age} = this.props.profile.profile;

        return (
            <div className="profile-wrap">
                <div><span className="profile-label">Имя: </span>{name}</div>
                <div><span className="profile-label">Возраст: </span>{age}</div>
            </div>
        );
    }
}