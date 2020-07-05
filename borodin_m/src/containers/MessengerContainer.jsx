import React, {Component} from 'react';
import {connect} from "react-redux";
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoad, chatsSend, chatsAdd, chatsRemove, messageRemove} from "actions/chats";

class MessengerContainer extends Component
{
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    createChat = (chatName) => {
        const {chats, chatsAddAction, redirect} = this.props;
        if (chatName.trim()) {
            const newChatID = Object.keys(chats).length ? Object.keys(chats).length + 1 : 0;

            chatsAddAction(newChatID, chatName);
            redirect(newChatID);
        } else {
            alert("Название чата не должно быть пустым!");
        }
    };

    removeChat = (id) => {
        const {chatsRemoveAction} = this.props;
        chatsRemoveAction(id);
    };

    messageRemove = (messageID) => {
        const {chatID, messagesRemoveAction} = this.props;
        messagesRemoveAction(chatID, messageID);
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
                messageRemove={this.messageRemove}
                createChat={this.createChat}
                removeChat={this.removeChat}
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
            chatsArray.push({id: key, name: chats[key].author, link: `/chats/${key}`, updated: chats[key].updated});
        }
    }

    return {
        chats: chatsArray,
        messages,
        chatID: match ? match.params.id : null,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsAddAction: (newChatID, chatName) => dispatch(chatsAdd(newChatID, chatName)),
        chatsRemoveAction: (id) => dispatch(chatsRemove(id)),
        messagesRemoveAction: (chatID, messageID) => dispatch(messageRemove(chatID, messageID)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    }
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);