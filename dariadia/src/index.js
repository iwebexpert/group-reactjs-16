import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

// const element = (<h1 className="react-second" id="test2">Hello, React.js!</h1>);

const messagesData = ['Hi!', 'Hello', 'Привет!', 'Сообщение 1'];

const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
  return data.map((item, index) => <Message text={item} key={index} />);
};

const Button = () => {
  const handleClick = (event) => {
    event.preventDefault();
    messagesData.push('Нормально');
    render();
  }

  return <button onClick={handleClick}><b>Кнопка</b></button>
};

// Балуемся. Да, оно каждый раз добавляет в массив + буква. Зато можно сделать ёлочку 
const Input = () => {
  const handleChange = (event) => {
    messagesData.push(event.target.value);
    render();
  }
  
  return <input onChange={handleChange} />
};

const render = () => {
  ReactDom.render(
  <div>
      <MessagesList data={messagesData} />
      <Button />
      <Input />
  </div>,
  document.getElementById('root'),
  );
};

render();
