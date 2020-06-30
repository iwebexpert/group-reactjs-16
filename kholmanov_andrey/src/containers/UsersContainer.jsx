/**
 * Created by Rusich on 30.06.2020.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Users} from 'components/Users';
import {loadProfile, changeUsername} from 'actions/users';

class UsersContainer extends Component {
    componentDidMount(){
        const {loadProfileAction} = this.props;
        loadProfileAction(); //Получение пользователей
    }

    render(){
        const {users, userId} = this.props;

        return (
            <Users users={users} userId={userId} />
        );
    }
}

/**
 * Для того, чтобы получить данные из store
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state, ownProps){
    const users = state.users.entries;
    const {match} = ownProps;

    let usersArrayForShow = [];
    for(let key in users){
        if(users.hasOwnProperty(key)){
            usersArrayForShow.push({username: users[key].username, link: `/user/${key}`});
        }
    }

    return {
        users: usersArrayForShow,
        userId: match ? match.params.id: null,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch){
    return {
        loadProfileAction: () => dispatch(loadProfile()),
    };
}

export const UsersRedux = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);