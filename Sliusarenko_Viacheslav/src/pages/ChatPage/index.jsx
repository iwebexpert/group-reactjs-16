import React, { Component, Fragment }  from 'react';
import { PropTypes } from "prop-types";

import { Messenger } from 'components/Messenger';
import { ChatList } from 'components/ChatList';

import './ChatPage.scss';

export class ChatPage extends Component {

  static propTypes = {
    chats: PropTypes.object.isRequired,
    onAddMessage: PropTypes.func.isRequired,
    onAddChat: PropTypes.func.isRequired,
    activeChatId: PropTypes.number,
    botName: PropTypes.string.isRequired
  }

  renderChatSide() {
    const { chats, activeChatId } = this.props;
    const selectedChat = chats[ activeChatId ];

    if ( !activeChatId || !selectedChat ) {
      return <div className="no-chat-selected">Chat is not selected</div>;
    }

    return <Messenger { ...this.prepareMessengerProps( selectedChat ) }/>;
  }

  prepareMessengerProps( selectedChat ) {
    const { onAddMessage, activeChatId, botName, onRemoveMessage, onOpenChat } = this.props;
    return {
      ...selectedChat, botName,
      addMessage: onAddMessage( activeChatId ),
      removeMessage: onRemoveMessage( activeChatId ),
      toggleChatStatus: onOpenChat( activeChatId )
    }
  }

  render() {
    const { chats, activeChatId, onAddChat, onRemoveChat } = this.props;

    return (
      <Fragment>
        <ChatList
          chats={ chats }
          activeChat={ activeChatId }
          onAdd={ onAddChat }
          onRemove={ onRemoveChat }
        />
        { this.renderChatSide() }
      </Fragment>
    );
  }
}