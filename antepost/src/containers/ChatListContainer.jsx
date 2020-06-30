import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ChatList} from 'components/ChatList';
import {chatsLoad, chatsAdd} from 'actions/chats';

class ChatListContainer extends Component {
    componentDidMount() {
        const {chatsLoadAction} = this.props;
        chatsLoadAction();
    }

    handleAddChat = (chatName) => {
        const {chatsAddAction} = this.props;

        chatsAddAction({
            chatName,
        });
    }

    render() {
        const {chats} = this.props;
        return (
            <ChatList chats={chats} addChat={this.handleAddChat} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;

    let chatsArrayForShow = [];
    for(let key in chats) {
        if(chats.hasOwnProperty(key)) {
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${key}`});
        }
    }

    return {
        chats: chatsArrayForShow,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsAddAction: (chatName) => dispatch(chatsAdd(chatName)),
    };
}

export const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);
