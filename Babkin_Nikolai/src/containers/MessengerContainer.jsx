import React from "react";
import {Messenger} from 'components/Messenger';
import {connect} from 'react-redux';
import {chatsLoadApi, chatsSend, chatsAdd, chatsRemoveMessage, chatsRemove, chatsAddApi} from 'actions/chats';
import {profileGet, profileGetApi, profileSet} from "actions/profile";
import {push} from 'connected-react-router';


class MessengerContainer extends React.Component {
    componentDidMount() {
        this.props.profileGetAction();

        if (!Object.keys(this.props.chats).length) {
            this.props.chatsLoadAction();
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
            redirect,
            isLoading,
            isError,
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
                redirect={redirect}
                isLoading={isLoading}
                isError={isError}
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
        isLoading: state.chats.loading,
        isError: state.chats.error,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadApi()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsRemoveMessageAction: (chatId, newMessages) => dispatch(chatsRemoveMessage(chatId, newMessages)),
        chatsRemoveAction: (newChats) => dispatch(chatsRemove(newChats)),
        // chatsAddAction: (newChat) => dispatch(chatsAdd(newChat)),
        chatsAddAction: (newChat) => dispatch(chatsAddApi(newChat)),
        profileGetAction: () => dispatch(profileGetApi()),
        profileSetAction: () => dispatch(profileSet()),
        redirect: (url) => dispatch(push(url)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);