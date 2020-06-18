import React, { Component, Fragment } from 'react';
import { MessageForm } from '../MessageForm';
import { MessagesList } from "../MessagesList";
import { Preloader } from "../ui/Preloader";

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

  componentDidMount() {
    const { bot: { messages } } = this.state;
    this.writeBotMessage( messages[ 0 ] || '...' );
  }

  componentDidUpdate() {
    const { messages, bot: { name : botNameAlias, messages: botMessages } } = this.state;
    const { author } = messages[ messages.length - 1 ] || {};

    if ( author !== botNameAlias ) {
      const randIndex = Math.floor(Math.random() * botMessages.length );

      this.writeBotMessage( `${ botMessages[ randIndex ] } ${ author }!` );
    }
  }

  writeBotMessage( text ) {
    const { bot: { timeout, name } } = this.state;
    setTimeout(() => {
      this.handleAddMessage({ author: name, message: text })
    }, timeout )
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
    const { messages, bot: { writing } } =  this.state;

    return (
      <Fragment>
        <MessagesList messages={ messages }/>
        <Preloader show={ writing }>Bot is writing</Preloader>
        <MessageForm addMessage={ this.handleAddMessage }/>
      </Fragment>
    );
  }
}