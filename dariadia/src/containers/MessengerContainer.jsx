import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { Messenger } from "components/Messenger";
import { chatsLoad, chatsSend, chatAdd, chatDelete } from "actions/chats";
import { userLoad, userAdd, userLogOut } from "actions/user";

class MessengerContainer extends Component {
  componentDidMount() {
    const { chatsLoadAction, userLoadAction } = this.props;
    chatsLoadAction();
    userLoadAction();
  }

  handleAddUser = (newUser) => {
    const { userAddAction } = this.props;
    const { username } = newUser;

    if (!username || !/\S/.test(username)) {
      alert("Please, enter a proper name!");
      return null;
    }

    userAddAction({
      ...newUser,
    });
  };

  handleLogOutUser = () => {
    const { userLogOutAction } = this.props;
    userLogOutAction();
  };

  handleAddChat = (newChat) => {
    const { chatAddAction, redirect, newChatId } = this.props;
    const { chatName } = newChat;

    if (!chatName || !/\S/.test(chatName)) {
      alert("Please, enter a proper name!");
      return null;
    }

    chatAddAction(newChatId, chatName);
    redirect(newChatId);
  };

  handleDeleteChat = (chatId) => {
    const { chatDeleteAction, redirect } = this.props;
  
    chatDeleteAction(chatId);
    redirect(" ");
  };

  handleMessageSend = (message) => {
    const { chatId, chatsSendAction } = this.props;
    const { author, text } = message;

    if (!author || !/\S/.test(author)) {
      alert("Hey, what's your name? ;)");
      return null;
    }

    if (!text || !/\S/.test(text)) {
      alert("Please, enter a message!");
      return null;
    }

    chatsSendAction({
      ...message,
      chatId,
    });
  };

  render() {
    const { chats, messages, currentUser } = this.props;

    return (
      <Messenger
        chats={chats}
        messages={messages}
        currentUser={currentUser}
        sendMessage={this.handleMessageSend}
        handleAddChat={this.handleAddChat}
        handleDeleteChat={this.handleDeleteChat}
        handleAddUser={this.handleAddUser}
        handleLogOutUser={this.handleLogOutUser}
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
  const user = state.user.currentUser;
  const { match } = ownProps;

  let messages = null;

  if (match && chats[match.params.id]) {
    messages = chats[match.params.id].messages;
  }

  let chatsArrayForShow = [];
  for (let key in chats) {
    if (chats.hasOwnProperty(key)) {
      chatsArrayForShow.push({
        id: key,
        name: chats[key].name,
        link: `/chats/${key}`,
        state: chats[key].state,
      });
    }
  }

  const lastId = Object.keys(chats).length ? Object.keys(chats).length : 0;

  return {
    chats: chatsArrayForShow,
    messages,
    chatId: match ? match.params.id : null,
    newChatId: lastId + 1,
    currentUser: user,
  };
}

/**
 * Для работы с actions
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    chatsLoadAction: () => dispatch(chatsLoad()),
    chatsSendAction: (message) => dispatch(chatsSend(message)),
    chatAddAction: (newChatId, chatName) =>
      dispatch(chatAdd(newChatId, chatName)),
    chatDeleteAction: (chatId) => dispatch(chatDelete(chatId)),
    redirect: (id) => dispatch(push(`/chats/${id}`)),

    userLoadAction: () => dispatch(userLoad()),
    userAddAction: (newUser) => dispatch(userAdd(newUser)),
    userLogOutAction: () => dispatch(userLogOut()),
  };
}

export const MessengerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessengerContainer);
