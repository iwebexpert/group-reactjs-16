import React, {Component} from 'react';

import './Profile.sass';

export class Profile extends Component {
    render() {
        return (
            <div className="profile-wrap">
                <div><span className="profile-label">Имя: </span>Вася</div>
                <div><span className="profile-label">Год рождения: </span>2000</div>
                <div><span className="profile-label">Город: </span>Москва</div>
                <div><span className="profile-label">Емэйл: </span>vasya2000@moscow.ru</div>
            </div>
        );
    }
}