import React from 'react'
import {ListMessages} from "components/ListMessages";
import {MessageForm} from "components/MessageForm";
import {ChatList} from "components/ChatList";
import './Messenger.scss';
import {Header} from "components/Header";

export class Messenger extends React.Component {
    timeout;

    componentDidMount() {
        if (sessionStorage.getItem('name')) {
            document.querySelector('.messenger').style.opacity = '1';
        } else {
            document.querySelector('.messenger').style.opacity = '0';
            document.location.href = '/';
        }
    }

    componentDidUpdate(prevProps) {
        this.chatBot(prevProps)
    }

    chatBot(prevProps) {
        const callbackBot = [
            'Рад видеть тебя в чате, ',
            'Ну и погодка сегодня, ',
            'Кажется, я тебя где то уже видел, ',
            'А ты сегодня хорош, ',
            'Очень хорошо, ',
            'Не очень хорошо, ',
            'Привет, ',
            'Меня зовут GLaDOS. Давай дружить, ',
            'Ой! Кажется ты запустал SkyNet, ',
        ]

        const number = Math.floor(Math.random() * callbackBot.length);

        if (typeof this.timeout === 'number') return;

        const id = this.props.chatId;
        const {messages} = this.props;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.author.toLocaleLowerCase() !== 'bot'
            && prevProps.messages.length
            && id === prevProps.chatId
            && messages.length !== prevProps.messages.length) {
            const text = callbackBot[number] + lastMessage.author;
            this.timeout = setTimeout(() => {
                this.props.handlerSendMessage({author: 'Bot', text: text, chatId: id})
                clearTimeout(this.timeout);
                this.timeout = null;
            }, 2000)
        }
    }

    render() {
        const {chatId, pageName, handlerAddChat, messages, userName, handlerSendMessage, chats} = this.props;

        return (
            <div className="messenger">
                <Header pageName={pageName}/>
                <div className="messenger__main">
                    <ChatList handlerAddChat={handlerAddChat} chatId={chatId} chats={chats}/>
                    <div className='messenger_chat'>
                        <ListMessages messages={messages}/>
                        <MessageForm userName={userName}
                                     handerlSendMessage={handlerSendMessage}
                                     chatId={chatId}/>
                    </div>
                </div>
            </div>
        );
    }
}