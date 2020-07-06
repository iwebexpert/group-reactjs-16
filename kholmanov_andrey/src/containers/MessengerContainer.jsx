import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend, chatsAdd, chatsRemove} from 'actions/chats';
import {loadProfile} from 'actions/users';

class MessengerContainer extends Component {
    componentDidMount(){
        const {chatsLoadAction, loadProfileAction} = this.props;
        chatsLoadAction(); //Получение чатов
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
        const {chatsAddAction} = this.props;
        chatsAddAction(newChat.name);
    };

    handleChatRemove = (id) => {
        const {chatsRemoveAction} = this.props;
        chatsRemoveAction(id);
    };

    render(){
        return (
            <Messenger {...this.props} removeChat={this.handleChatRemove} sendMessage={this.handleMessageSend} sendChat={this.handleChatSend} />
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
            chatsArrayForShow.push({id: chats[key].id,name: chats[key].name, link: `/chats/${key}`});
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id: null,
        user,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsAddAction: (name) => dispatch(chatsAdd(name)),
        chatsRemoveAction: (id) => dispatch(chatsRemove(id)),
        loadProfileAction: () => dispatch(loadProfile()),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);