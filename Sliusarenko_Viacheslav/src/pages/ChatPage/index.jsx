import React, { Component, Fragment }  from 'react';
import { Messager } from 'components/Messager';
import { ChatList } from 'components/ChatList';

import './ChatPage.scss';

export class ChatPage extends Component {
  state = {
    chats: {
      1: { name: 'mainChat', messages: [] },
      2: { name: 'secondChat', messages: [] },
      3: { name: 'oneMoreChat', messages: [] },
      4: { name: 'lastChat', messages: [] },
    },
  }

  handleCreateNewChat = ( chatName ) => {
    const { chats } = this.state;
    const keys = Object.keys( chats );
    const newId = Number( keys[ keys.length - 1 ] ) + 1;

    this.setState({
      chats: { ...chats, [ newId ]: { name: chatName, messages: [] } }
    });
  }

  handleAddMessage = ( chatId, message ) => {
    const { chats } = this.state;

    const updatedChats = {
      ...chats, [ chatId ]: {
        ...chats[ chatId ],
        messages: chats[ chatId ].messages.concat( message )
      }
    }
    this.setState({ chats: updatedChats });
  }

  renderChatSide( activeChatId ) {
    const { chats, userName } = this.state;
    const selectedChat = chats[ activeChatId ];

    if ( !activeChatId || !selectedChat ) {
      return <div className="no-chat-selected">Chat is not selected</div>;
    }
    return <Messager
      { ...selectedChat }
      chatId={ activeChatId }
      addMessage={ this.handleAddMessage }
    />;
  }

  render() {
    const { chats } = this.state;
    const { match: { params: { id } }} = this.props;

    return (
      <Fragment>
        <ChatList chats={ chats } activeChat={ Number( id ) } onAdd={ this.handleCreateNewChat }/>
        { this.renderChatSide( id ) }
      </Fragment>
    );
  }
}