import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend} from 'actions/chats';

class MessengerContainer extends Component {
    componentDidMount(){
        const {chatsLoadAction} = this.props;
        chatsLoadAction(); //Получение чатов
    };

    handleMessageSend = (message) => {
        const {chatId, chatsSendAction} = this.props;

        chatsSendAction({
            ...message,
            chatId,
        });
    };

    render(){
        const {chats, messages} = this.props;

        return (
            <Messenger chats={chats} messages={messages} sendMessage={this.handleMessageSend} />
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
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${key}`});
        }
    }

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id: null,
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
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);