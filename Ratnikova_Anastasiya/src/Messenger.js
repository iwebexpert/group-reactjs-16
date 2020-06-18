import React, {Component} from 'react';

export class Messenger extends Component {
    state = {
        messages: [
            {
                text: 'Message 1',
                author: 'Nastya'
            }
        ]
    };

    interval = null;
    templateMessages = ['Hi!', 'Hello!', 'How are you?'];

    componentDidMount() {
        this.interval = setInterval(() => {
            const runIndex = Math.floor(Math.random() * this.templateMessages.length);
            this.setState({
                messages: this.state.messages.concat([{text: this.templateMessages[runIndex], author: 'Nastya'}])
            })
        }, 5000);
    }

    render() {
        const {messages} = this.state;

        return (
            <div>
                <ul>
                    {messages.map((message, index) => <li key={index}><b>{message.author}: </b>{message.text}</li>)}
                </ul>
            </div>
        );
    }
}