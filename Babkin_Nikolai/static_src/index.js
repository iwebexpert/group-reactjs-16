import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

let messages = [
    'first message',
    'second message'
];

const MessageToHtml = (props) =>
    <div className="SomeClass">
        <p>{props.message}</p>
    </div>;

const Mapping = (props) => {
    return props.messages.map((result, key) => <MessageToHtml key={key} message={result}/>);
};

const Button = () => {
    const Handler = () => {
        messages.push('new message');
        ReactDOM.render(
            <Mapping messages={messages}/>,
            document.getElementById('messages'),
        );
    };
    return <button className='buttonElem' onClick={Handler}>New Message</button>;
};

const Main = () =>
    <div className="SomeClass">
        <Button/>
        <div id='messages'>
            <Mapping messages={messages}/>
        </div>
    </div>;

ReactDOM.render(
    <Main/>,
    document.getElementById('root'),
);