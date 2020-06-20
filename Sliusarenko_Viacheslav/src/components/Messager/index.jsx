import React, { Component } from 'react';
import { MessageForm } from 'components/MessageForm';
import { MessagesList } from 'components/MessagesList';

import './Messager.scss';
import { Preloader } from 'components/ui/Preloader';

export class Messager extends Component {
  state = {
    messages: [],
    bot: {
      name: 'justBot',
      timeout: 2000,
      messages: [ 'Hello', 'Hello Again', 'Write something' ],
      writing: true
    }
  }

  botInit() {
    const { bot: { timeout } } = this.state;
    setTimeout( this.writeBotMessage, timeout )
  }

  componentDidMount() {
    this.botInit()
  }

  componentDidUpdate() {
    this.botInit();
  }

  writeBotMessage = () => {
    const { bot: { name: botNameAlias, messages: botMessages }, messages } = this.state;
    const { author } = messages[ messages.length - 1 ] || {};

    function getNewMessage() {
      const randIndex = Math.floor(Math.random() * botMessages.length );
      return `${ botMessages[ randIndex ] } ${ author }!`;
    }

    if ( author !== botNameAlias ) {
      const message = !author ? botMessages[ 0 ] : ( getNewMessage( author ) );

      if ( author !== botNameAlias ) {
        this.handleAddMessage({ author: botNameAlias, message });
      }
    }
  }

  handleAddMessage = ( data ) => {
    const { messages, bot } = this.state;
    const newMessage = { id: ( messages.length + 1 ), ...data };

    this.setState({
      messages: messages.concat( newMessage ),
      bot: { ...bot, writing: !bot.writing }
    });
  }

  render() {
    const { messages, bot: { name, writing } } =  this.state;
    return (
      <div className="messenger">
        <MessagesList messages={ messages } botName={ name }>
          <Preloader show={ writing }>{ name } is writing</Preloader>
        </MessagesList>
        <MessageForm addMessage={ this.handleAddMessage }/>
      </div>
    );
  }
}