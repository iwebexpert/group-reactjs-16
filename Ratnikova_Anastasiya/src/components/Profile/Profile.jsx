import React, {Component} from 'react';

export class Profile extends Component {
    render() {
        const {name, email, phone} = this.props;

        return (
            <div>
                <h1>Личный кабинет пользователя</h1>
                <h3>{name}, это страница Вашего профиля</h3>
                <p>Email: {email}</p>
                <p>Телефон: {phone}</p>
            </div>
        );
    }
}