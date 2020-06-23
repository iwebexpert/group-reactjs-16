import React from 'react'
import {ListMessages} from "components/ListMessages";
import {MessageForm} from "components/MessageForm";
import {ChatList} from "components/ChatList";
import './Messenger.scss';

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

    timeout;

    addMessage = (message) => {
        this.setState({
            messages: this.state.messages.concat(message)
        })
    }

    componentDidUpdate() {
        this.chatBot()
    }

    chatBot() {
        const callbackBot = [
            'Рад видеть тебя в чате, ',
            'Ну и погодка сегодня, ',
            'Кажется, я тебя где то уже видел, ',
            'А ты сегодня хорош, ',
            'Добро пожаловать в компьютеризированный экспериментальный центр при лаборатории исследования природы порталов, ',
            'Очень хорошо, ',
            'Не очень хорошо, ',
            'Привет, ',
            'Меня зовут GLaDOS. Давай дружить, ',
            'Ой! Кажется ты запустал SkyNet, ',
        ]

        const number = Math.floor(Math.random() * callbackBot.length);

        if (typeof this.timeout === 'number') return;

        const message = this.state.messages[this.state.messages.length - 1];
        if (message.author.toLocaleLowerCase() !== 'bot') {
            const text = callbackBot[number] + message.author;
            this.timeout = setTimeout(() => {
                this.addMessage({author: 'Bot', text: text})
                clearTimeout(this.timeout);
                this.timeout = null;
            }, 2000)
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
            <div className="messenger">
                <ChatList/>
                <div className='messenger_chat'>
                    <ListMessages messages={this.state.messages}/>
                    <MessageForm handlerCallback={this.addMessage}/>
                </div>
            </div>
        );
    }
}