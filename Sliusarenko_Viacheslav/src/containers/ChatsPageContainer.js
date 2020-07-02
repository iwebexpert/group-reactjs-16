import { connect } from 'react-redux';
import React, { Component } from 'react';

import { ChatPage } from 'pages/ChatPage';
import { botConfig } from "middlewares/botMiddleware";
import { addNewChat, loadChats, addNewMessage, removeMessage, removeChat, toggleNotify } from 'actions/chat';

class ChatsPageContainer extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }
  render() {
    const { load, isLoaded, ...rest } = this.props;

    if ( !isLoaded ) {
      return <h3>Загрузка чатов...</h3>;
    }
    return <ChatPage { ...rest } />;
  }
}

function mapStateToProps( state, ownProps ) {
  const { chat: { entries, isLoaded } } = state;
  const { match: { params: { id } }} = ownProps;
  return {
    isLoaded,
    chats: entries,
    activeChatId: id ? Number( id ) : null,
    botName: botConfig.name
  };
}

function mapDispatchToProps( dispatch ) {

  function load() {
      dispatch( loadChats() );
  }

  function onAddMessage( chatId ) {
    return function ( message ) {
      dispatch( addNewMessage( chatId, message ) )
    };
  }

  function onRemoveMessage( chatId ) {
    return function ( messageId ) {
      dispatch( removeMessage( chatId, messageId ) )
    };
  }

  function onRemoveChat( chatId ) {
    return function () {
      dispatch( removeChat( chatId ) )
    };
  }

  function onAddChat( name ) {
      dispatch( addNewChat( name ) );
  }

  function onOpenChat( chatId ) {
    return function () {
      dispatch( toggleNotify( chatId, false ) );
    }
  }

  return { onAddMessage, onRemoveMessage, onAddChat, onRemoveChat, load, onOpenChat };
}

export default connect(mapStateToProps, mapDispatchToProps)( ChatsPageContainer );