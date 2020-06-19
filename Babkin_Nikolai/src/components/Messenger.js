import React from 'react'
import {ListMessages} from "./ListMessages";
import {MessageForm} from "./MessageForm";

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                author: 'First Author',
                text: 'first message'
            },
            {
                author: 'Second Author',
                text: 'second message'
            },
        ]
    };

    addMessage = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        })
    }

    componentDidUpdate() {
        this.chatBot()
    }

    chatBot() {
        const message = this.state.messages[this.state.messages.length - 1];
        if (message.author.toLocaleLowerCase() !== 'bot') {
            const text = 'Рады видеть тебя в чате ' + message.author;
            setTimeout(() => {this.addMessage({author: 'Bot', text: text})}, 1000)
        }
    }

    componentDidMount() {
        if (sessionStorage.getItem('name')) {
            document.querySelector('.messenger').style.opacity = '1';
            const identifier = document.querySelector('.identification');
            identifier.style.top = '2%'
            identifier.style.right = '2%'
        }
    }

    render() {
        return (
            <div className='messenger'>
                <h2 className="messenger_h2">Messenger</h2>
                <ListMessages messages={this.state.messages}/>
                <MessageForm handlerCallback={this.addMessage}/>
            </div>
        );
    }
}