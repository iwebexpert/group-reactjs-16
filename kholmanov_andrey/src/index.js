/**
 * Created by ankho on 16.06.2020.
 */

import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

const App = () => {
    ReactDom.render(
        <div>
            <MessagesList data={messagesData} />
            <div className="message-new">
                <Input />
                <Button />
            </div>
        </div>,
        document.getElementById('root'),
    );
};

const messagesData = ['Hi!', 'Hello', 'Привет!', 'Сообщение 1'];

const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
    return data.map((item, index) => <Message text={item} key={index} />);
};

const Input = () => {
    return <input type="text" className="massage-input"/>;
};

const Button = () => {
    const handleClick = (event) => {
        const messageInput = document.querySelector('.massage-input');
        if (messageInput.value) {
            messagesData.push(messageInput.value);
            messageInput.value = '';
            messageInput.classList.remove('error');
        } else {
            messageInput.classList.add('error');
        }
        App();
    };
    return <button className="massage-submit" onClick={handleClick}>Отправить</button>
};

App();