import React from "react";
import {Messenger} from 'components/Messenger';
import {connect} from 'react-redux';
import {chatsLoadApi, chatsRemoveMessage, chatsAddApi, chatsSendApi, chatsDeleteApi} from 'actions/chats';
import {profileGetApi, profileSet} from "actions/profile";
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
            pathName,
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
                handlerRemoveChat={this.props.chatsDeleteAction}
                botPrinting={botPrinting}
                redirect={redirect}
                isLoading={isLoading}
                isError={isError}
                pathName={pathName}
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
    let pathName = '';

    if (match && chats.length) {
        const id = match.params.id;
        for (let chat of chats) {
            if (chat._id === id) {
                messages = chat.messages;
                pageName = chat.name
                botPrinting = chat.botPrinting
                break;
            }
        }
    }
    if (match) {
        pathName = match.url.split('/')[1];
    }

    for (let key in chats) {
        if (chats.hasOwnProperty(key)) {
            chats[key].link = `/chats/${chats[key]._id}`;
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
        pathName,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        chatsLoadAction: () => dispatch(chatsLoadApi()),
        chatsSendAction: (message) => dispatch(chatsSendApi(message)),
        chatsAddAction: (newChat) => dispatch(chatsAddApi(newChat)),
        chatsDeleteAction: (chatId) => dispatch(chatsDeleteApi(chatId)),
        profileGetAction: () => dispatch(profileGetApi()),

        chatsRemoveMessageAction: (chatId, newMessages) => dispatch(chatsRemoveMessage(chatId, newMessages)),

        redirect: (url) => dispatch(push(url)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);