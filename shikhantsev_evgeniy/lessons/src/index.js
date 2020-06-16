import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

// вариант 1
// const element = React.createElement(
//     'h1',
//     {id: 'test', className: 'react-first'},
//     'Hello, React.js',
// );

// Вариант 2 JSX
const element = (<h1 className="react-second" id="test2">Hello, React.js</h1>);

const Message = (props) => <div className="test"> {props.text}</div>;

const MessagesList = ({data}) => {
    // console.log(props)
    return data.map((item, index) => <Message text={item} key={index} />);
};

var messagesData = ['Hi', 'Hello', 'Привет!', 'Сообщение 1'];

const handleClick = (event) => {
    console.log(event);
    console.log('Btn clicked!');
    messagesData.push('Сообщение!');
    console.log(messagesData);
    ReactDom.render(
        <MessagesList data={messagesData}/>,
        document.getElementById('root'), 
    );
    
}
const Button = () => {
    return <button onClick={handleClick}>Сообщение</button>
};

ReactDom.render(
    <Button />,
    document.getElementById('btn'), 
);

ReactDom.render(
    <MessagesList data={messagesData}/>,
    document.getElementById('root'), 
);



   