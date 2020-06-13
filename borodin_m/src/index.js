import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

const App = () => {
  ReactDom.render(
    <div className="container">
      <MessageList data={messages}/>
      <div className="msg-input-wrap">
        <InputText/>
        <Button/>
      </div>
    </div>,
    document.getElementById('root')
  );
};

const messages = [];
const Message = (props) => <div className="msg">{props.text}</div>;
const MessageList = ({data}) => {
  return data.map((item, index) => <Message text={item} key={index} />);
};

const InputText = () => {
  return <input className="msg-input"/>;
};

const Button = () => {
  const handleClick = () => {
    console.log('Add message');
    const msgElem = document.querySelector('.msg-input');
    const msg = msgElem ? msgElem.value : "";
    messages.push(msg);
    App();
  };
  return <button onClick={handleClick}>Send</button>;
};

App();