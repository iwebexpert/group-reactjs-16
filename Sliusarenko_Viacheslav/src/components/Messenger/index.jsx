import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MessageForm } from 'components/MessageForm';
import { MessagesList } from 'components/MessagesList';

import './Messenger.scss';

const messengerInitialState = {
  botName: 'ChatBot',
  botMessages: [ 'Hello', 'Hello Again', 'Write something' ],
  timeout: 2000,
  author: ''
}

export class Messenger extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  state = messengerInitialState;

  botInit() {
    const { timeout } = this.state;
    setTimeout( this.writeBotMessage, timeout )
  }

  componentDidMount() {
    this.botInit();
  }

  componentDidUpdate() {
    this.botInit();
  }

  writeBotMessage = () => {
    const { messages } = this.props;
    const { botName, botMessages } = this.state;

    const { author } = messages[ messages.length - 1 ] || {};

    if ( author !== botName ) {
      const message = !author ? botMessages[ 0 ] : ( this.getNewBotMessage( author ) );
      this.handleAddMessage({ author: botName, message });
    }
  }

  getNewBotMessage( author ) {
    const { botMessages } = this.state;
    const randIndex = Math.floor(Math.random() * botMessages.length );

    return `${ botMessages[ randIndex ] } ${ author }!`;
  }

  handleAddMessage = ( data ) => {
    const { messages, chatId, addMessage } = this.props;
    const newMessage = { id: ( messages.length + 1 ), ...data };

    if ( typeof addMessage === "function" ) {
      addMessage( chatId, newMessage );
    }
  }

  handleSetAuthor = ( author ) => {
    this.setState({ author });
    localStorage.setItem('author', author );
  }

  render() {
    const { messages } = this.props;
    const { botName, author } = this.state;

    return (
      <div className="messenger">
        <MessagesList messages={ messages } botName={ botName }/>
        <MessageForm addMessage={ this.handleAddMessage } author={ author } setAuthor={ this.handleSetAuthor }/>
      </div>
    );
  }
}