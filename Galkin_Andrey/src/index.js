import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

const element = <h1 className="react-second" id="test2">Hello React.js!</h1>;

const messagesData = ['1', '2', '3', '4'];

const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
  return data.map((item, index) => <Message text={item} key={index}/>);
};

//Для ДЗ
const Button = () => {
  //Правильно
  const handleClick = (event) => {
    console.log(event);
    console.log('Btn click!');
  };
  return <div onClick={handleClick}><b>Кнопка 1</b></div>;
};

ReactDom.render(
  <div>
    <MessagesList data={messagesData}/>
    <Button/>
  </div>,
  document.getElementById('root'),
);