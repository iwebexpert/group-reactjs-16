import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

const messagesData = [];

const ChatForm = () => <form action="#"></form>
const NameLabel = () => <label htmlFor="chat-name">Имя</label>;
const TextLabel = () => <label htmlFor="chat-text">Текст сообщения</label>;
const InputField = (props) => <input type="text" id="chat-name" className="chat__name" required/>
const TextField = () => <textarea rows="10" cols="50" className="chat__text" id="chat-text" required></textarea>;
const Message = (props) => <p className="chat__message">{props.name}: {props.text}</p>;
const MessagesList = ({data}) => {
    return data.map((item, index) => <Message text={item.text} name={item.name} key={index}/>);
};

const SubmitButton = () => {
    const handleClick = (event) => {
        event.preventDefault();
        const nameVal = document.querySelector('.chat__name').value;
        const textVal = document.querySelector('.chat__text').value;
        messagesData.push({
            name: nameVal,
            text: textVal
        });
        ReactDom.render(
            <div className="chat__body">
                <h1 className="react-class" id="react">React Чат</h1>
                <form action="#">
                    <NameLabel/>
                    <InputField/>
                    <TextLabel/>
                    <TextField/>
                    <SubmitButton/>
                </form>
                <MessagesList data={messagesData}/>
            </div>, document.getElementById('root'));
    };
    return <button type="submit" onClick={handleClick}>Отправить</button>;
};


ReactDom.render(
    <div className="chat__body">
        <h1 className="react-class" id="react">React Чат</h1>
        <form action="#">
            <NameLabel/>
            <InputField/>
            <TextLabel/>
            <TextField/>
            <SubmitButton/>
        </form>
        <MessagesList data={messagesData}/>
   </div>,
    document.getElementById('root'));
