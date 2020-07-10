import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ChatList } from 'components/ChatList';
import { chatsLoadApi, chatsAddApi, chatsUnblink, chatsDeleteApi } from 'actions/chats';

class ChatListContainer extends Component {
    componentDidMount() {
        const { chatsLoadAction } = this.props;
        chatsLoadAction();
    }

    handleAddChat = (chatName) => {
        const { chatsAddAction } = this.props;

        chatsAddAction({
            chatName,
        });
    }

    handleDeleteChat = (chatId) => {
        const { chatsDeleteAction } = this.props;

        chatsDeleteAction({
            chatId,
        });
    }

    handleNavigate = (link) => {
        const { chatsUnblinkAction } = this.props;

        this.props.pushAction(link);
        const chatId = link.match(/chats\/(.*)/)[1];
        chatsUnblinkAction(chatId);
    };

    render() {
        const { chats, match } = this.props;
        return (
            <ChatList chats={chats} addChat={this.handleAddChat} match={match} handleNavigate={this.handleNavigate} deleteChat={this.handleDeleteChat} />
        );
    }
}

function mapStateToProps(state) {
    const chats = state.chats.entries;

    let chatsArrayForShow = [];
    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chatsArrayForShow.push({ name: chats[key].name, link: `/chats/${key}`, blinking: chats[key].blinking });
        }
    }

    return {
        chats: chatsArrayForShow,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadApi()),
        chatsAddAction: (chatName) => dispatch(chatsAddApi(chatName)),
        chatsUnblinkAction: (chatId) => dispatch(chatsUnblink(chatId)),
        pushAction: (link) => dispatch(push(link)),
        chatsDeleteAction: (chatId) => dispatch(chatsDeleteApi(chatId)),
    };
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);
