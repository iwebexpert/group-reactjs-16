import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ChatPage } from 'pages/ChatPage';
import { addNewChat, loadChats, addNewMessage } from 'actions/chat';


class ChatsPageContainer extends Component {
  componentDidMount() {
    const { load } = this.props;
    load();
  }
  render() {
    const { load, isLoaded, ...rest } = this.props;

    if ( isLoaded ) {
      return <ChatPage { ...rest } />;
    }

    return <h3>Загрузка чатов...</h3>;
  }
}

function mapStateToProps( state, ownProps ) {
  const { chat: { entries, isLoaded } } = state;
  const { match: { params: { id } }} = ownProps;
  return {
    isLoaded,
    chats: entries,
    activeChatId: id ? Number( id ) : null,
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

  function onAddChat( name ) {
      dispatch( addNewChat( name ) );
  }
  return { onAddMessage, onAddChat, load };
}

export default connect(mapStateToProps, mapDispatchToProps)( ChatsPageContainer );