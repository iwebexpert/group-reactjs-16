import React, { Component } from "react";
import { connect } from "react-redux";

import { Messenger } from "components/Messenger";
import { chatsLoad, chatsSend, chatAdd } from "actions/chats";

class MessengerContainer extends Component {
  componentDidMount() {
    const { chatsLoadAction } = this.props;
    chatsLoadAction(); //Получение чатов
  }

  componentDidUpdate() {
    const { messages } = this.props;

    if (messages) {
      const { author } = messages[messages.length - 1];
      if (messages[messages.length - 1].author !== "Bot") {
        setTimeout(() => {
          this.handleMessageSend({
            text: `Hey ${author}! We've received your message.`,
            author: "Bot",
          });
        }, 1000);
      }
    }
  }

  handleAddChat = (newChat) => {
    const { chatAddAction } = this.props;
    const { chatname } = newChat;

    if (!chatname || !/\S/.test(chatname)) {
      alert("Please, enter a proper name!");
      return null;
    }

    chatAddAction({
      ...newChat,
    });
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
    const { chats, messages } = this.props;

    return (
      <Messenger
        chats={chats}
        messages={messages}
        sendMessage={this.handleMessageSend}
        handleAddChat={this.handleAddChat}
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
  const { match } = ownProps;

  let messages = null;

  if (match && chats[match.params.id]) {
    messages = chats[match.params.id].messages;
  }

  let chatsArrayForShow = [];
  for (let key in chats) {
    if (chats.hasOwnProperty(key)) {
      chatsArrayForShow.push({ name: chats[key].name, link: `/chats/${key}` });
    }
  }

  return {
    chats: chatsArrayForShow,
    messages,
    chatId: match ? match.params.id : null,
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
    chatAddAction: (newChat) => dispatch(chatAdd(newChat)),
  };
}

export const MessengerRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessengerContainer);
