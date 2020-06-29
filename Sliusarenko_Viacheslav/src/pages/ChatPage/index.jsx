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
    activeChatId: PropTypes.number
  }


  renderChatSide() {
    const { chats, onAddMessage, activeChatId } = this.props;
    const selectedChat = chats[ activeChatId ];

    if ( !activeChatId || !selectedChat ) {
      return <div className="no-chat-selected">Chat is not selected</div>;
    }
    return <Messenger { ...selectedChat } addMessage={ onAddMessage( activeChatId ) } />;
  }

  render() {
    const { chats, activeChatId, onAddChat } = this.props;

    return (
      <Fragment>
        <ChatList chats={ chats } activeChat={ activeChatId } onAdd={ onAddChat }/>
        { this.renderChatSide() }
      </Fragment>
    );
  }
}