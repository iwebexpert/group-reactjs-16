import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoadApi, chatsSend, chatsAddApi, chatsRemoveApi} from 'actions/chats';
import {userLoadApi} from 'actions/users';

class MessengerContainer extends Component {
    componentDidMount(){
        const {chatsLoadAction, loadProfileAction} = this.props;
        if (!this.props.chats.length) {
            chatsLoadAction(); //Получение чатов
        }

        loadProfileAction(); //Получение данных пользователя
    }

    handleMessageSend = (message) => {
        const {chatId, chatsSendAction} = this.props;

        chatsSendAction({
            ...message,
            chatId,
        });
    };

    handleChatSend = (newChat) => {
        const {chatsAddAction, redirect, chats} = this.props;
        const newId = chats.length + 1;
        chatsAddAction(newId, newChat.name);
        redirect(newId);
    };

    handleChatRemove = (chatId) => {
        const {chatsRemoveAction} = this.props;
        console.log(chatId);
        chatsRemoveAction(chatId);
    };

    render(){
        const {user, chats, messages, isLoading, isError} = this.props;

        const ownProps = {
            isError,
            isLoading,
            chats,
            messages,
            user,

            removeChat: this.handleChatRemove,
            sendMessage: this.handleMessageSend,
            sendChat: this.handleChatSend,
        };

        return (
            <Messenger {...ownProps} />
        );
    }
}

/**
 * Для того, чтобы получить данные из store
 * @param {*} state 
 * @param {*} ownProps 
 */
function mapStateToProps(state, ownProps){
    const chats = state.chats.entries;
    const user = state.users.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({
                id: chats[key].id,
                name: chats[key].name,
                link: `/chats/${chats[key].id}`,
                highlighting: chats[key].highlighting
            });
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id: null,
        user,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoadApi()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsAddAction: (newId, name) => dispatch(chatsAddApi(newId, name)),
        chatsRemoveAction: (chatId) => dispatch(chatsRemoveApi(chatId)),
        loadProfileAction: () => dispatch(userLoadApi()),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);