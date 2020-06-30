import React from "react";
import {Messenger} from 'components/Messenger';
import {connect} from 'react-redux';
import {chatsLoad, chatsSend, chatsAdd} from 'actions/chats';
import {profileGet, profileSet} from "actions/profile";

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
        const {chats, messages = {}, chatId, pageName, userName} = this.props;

        return (
            <Messenger
                chats={chats}
                messages={messages}
                pageName={pageName}
                chatId={chatId}
                userName={userName}
                handlerSendMessage={this.props.chatsSendAction}
                handlerAddChat={this.props.chatsAddAction}
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
    if (match && chats[match.params.id]) {
        messages = chats[match.params.id].messages;
        pageName = chats[match.params.id].name
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
        chatsAddAction: (newChat) => dispatch(chatsAdd(newChat)),
        profileGetAction: () => dispatch(profileGet()),
        profileSetAction: (name) => dispatch(profileSet(name)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);