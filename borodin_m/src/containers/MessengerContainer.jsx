import React, {Component} from 'react';
import {connect} from "react-redux";

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend, chatsAdd} from "actions/chats";

class MessengerContainer extends Component
{
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    createChat = (chatName) => {
        const {chatsAddAction} = this.props;
        if (chatName.trim()) {
            chatsAddAction(chatName);
        } else {
            alert("Название чата не должно быть пустым!");
        }
    };

    handleMessageSend = (message) => {
        const {chatID, chatsSendAction} = this.props;

        chatsSendAction({
           ...message,
           chatID
        });
    };

    render() {
        const {chats, messages} = this.props;

        return (
            <Messenger
                chats={chats}
                messages={messages}
                sendMessage={this.handleMessageSend}
                createChat={this.createChat}
            />
        )
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
    }

    const chatsArray = [];
    for (const key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArray.push({name: chats[key].author, link: `/chats/${key}`});
        }
    }

    return {
        chats: chatsArray,
        messages,
        chatID: match ? match.params.id : null
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsAddAction: (chatName) => dispatch(chatsAdd(chatName))
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);