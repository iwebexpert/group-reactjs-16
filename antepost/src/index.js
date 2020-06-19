import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

const messagesData = ['Hi!', 'Hello', 'Привет!', 'Сообщение 1'];

const Message = (props) => <div className="test">{props.text}</div>;

const MessagesList = ({data}) => {
    return data.map((item, index) => <Message text={item} key={index} />);
};

const Button = () => {
    const handleClick = (event) => {
        const text = 'Success';
        messagesData.push(text);
        console.log(`Message with the text ${text} has been added successfully`);
        render();
    };
    return <div onClick={handleClick}><b>Кнопка 1</b></div>
};

const render = () => {
    ReactDom.render(
        <div>
            <MessagesList data={messagesData} />
            <Button />
        </div>,
        document.getElementById('root'),
    );
}

render();
