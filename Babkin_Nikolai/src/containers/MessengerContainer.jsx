import React from "react";
import {Messenger} from 'components/Messenger';
import {connect} from 'react-redux';
import {chatsLoad, chatsSend, chatsAdd, chatsRemoveMessage, chatsRemove} from 'actions/chats';
import {profileGet, profileSet} from "actions/profile";
import {push} from 'connected-react-router';

class MessengerContainer extends React.Component {
    componentDidMount() {
        this.props.profileGetAction();
        this.props.chatsLoadAction();

        const name = sessionStorage.getItem('name')
        if (name) {
            this.props.profileSetAction({name})
        }
    }

    render() {
        const {
            chats,
            messages = {},
            chatId,
            pageName,
            userName,
            botPrinting,
        } = this.props;

        return (
            <Messenger
                chats={chats}
                messages={messages}
                pageName={pageName}
                chatId={chatId}
                userName={userName}
                handlerSendMessage={this.props.chatsSendAction}
                handlerAddChat={this.props.chatsAddAction}
                handlerRemoveMessage={this.props.chatsRemoveMessageAction}
                handlerRemoveChat={this.props.chatsRemoveAction}
                botPrinting={botPrinting}
            />
        );
    }
}

/**
 * Для того, чтобы получить данные из store
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state, ownProps) {
    const chats = state.chats.entries;
    const {match} = ownProps;
    const userName = state.profile.entries.name

    let messages = [];
    let pageName = '';
    let botPrinting = '';
    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
        pageName = chats[match.params.id].name
        botPrinting = chats[match.params.id].botPrinting
    }

    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chats[key].link = `/chats/${key}`;
        }
    }

    return {
        chats,
        messages,
        chatId: match.params.id,
        pageName,
        userName,
        botPrinting,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoad()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsRemoveMessageAction: (chatId, newMessages) => dispatch(chatsRemoveMessage(chatId, newMessages)),
        chatsRemoveAction: (newChats) => dispatch(chatsRemove(newChats)),
        chatsAddAction: (newChat) => dispatch(chatsAdd(newChat)),
        profileGetAction: () => dispatch(profileGet()),
        profileSetAction: (name) => dispatch(profileSet(name)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);