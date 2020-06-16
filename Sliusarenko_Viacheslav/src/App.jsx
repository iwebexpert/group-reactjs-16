import React, { useState } from 'react';

import { MessagesList } from './components/MessagesList';
import './styles/main.css';
import { NewMessage } from './components/NewMessage';

export default function App() {
  const MOCK_MESSAGES = [
    { id: 1, message: 'first'},
    { id: 2, message: 'second'},
  ];
  const [ messages, setMessages ] = useState( MOCK_MESSAGES );

  function handleAddNewMessage( message ) {
    const newMessage = {
      id: ( messages.length + 1 ), message
    };
    setMessages([ ...messages, newMessage ]);
  }

  return (
    <div className="page__content">
      <NewMessage addMessage={ handleAddNewMessage } />
      <MessagesList messages={ messages }/>
    </div>
  );
}