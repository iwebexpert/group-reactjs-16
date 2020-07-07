import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from "@material-ui/core";

import { ChatPage } from 'pages/ChatPage';
import { botConfig } from 'middlewares/botMiddleware';
import { addNewChat, loadChats, addNewMessage, removeMessage, removeChat, toggleNotify } from 'actions/chat';

class ChatsPageContainer extends Component {

  componentDidMount() {
    const { load } = this.props;
    load();
  }
  render() {
    const { load, isFetching, error, ...rest } = this.props;

    if ( isFetching ) {
      return <h3>Загрузка чатов...</h3>;
    }

    if ( error ) {
      return <Badge>{ error }</Badge>;
    }

    return <ChatPage { ...rest } />;
  }
}

function mapStateToProps( state, ownProps ) {
  const { chat: { entries, isFetching } } = state;
  const { match: { params: { id: activeChatId } }} = ownProps;

  return {
    isFetching, activeChatId,
    chats: entries,
    botName: botConfig.name
  };
}

function mapDispatchToProps( dispatch ) {

  function load() {
      dispatch( loadChats() );
  }

  function onAddMessage( chatId ) {
    return function ( message ) {
      const { author, text } = message;
      dispatch( addNewMessage( chatId, author, text ) )
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