import React from 'react'
import {ListMessages} from "components/ListMessages";
import {MessageForm} from "components/MessageForm";
import {ChatList} from "components/ChatList";
import './Messenger.scss';
import {Header} from "components/Header";

export class Messenger extends React.Component {
    componentDidMount() {
        if (sessionStorage.getItem('name')) {
            document.querySelector('.messenger').style.opacity = '1';
        } else {
            document.querySelector('.messenger').style.opacity = '0';
            document.location.href = '/';
        }
    }

    render() {
        const {
            chatId,
            pageName,
            handlerAddChat,
            messages,
            userName,
            handlerSendMessage,
            chats,
            botPrinting,
            handlerRemoveMessage,
            handlerRemoveChat
        } = this.props;

        return (
            <div className="messenger">
                <Header pageName={pageName}/>
                <div className="messenger__main">
                    <ChatList
                        handlerAddChat={handlerAddChat}
                        handlerRemoveChat={handlerRemoveChat}
                        chatId={chatId}
                        chats={chats}/>
                    <div className='messenger_chat'>
                        <ListMessages
                            messages={messages}
                            botPrinting={botPrinting}
                            chatId={chatId}
                            handlerRemoveMessage={handlerRemoveMessage}/>
                        <MessageForm userName={userName}
                                     handerlSendMessage={handlerSendMessage}
                                     chatId={chatId}/>
                    </div>
                </div>
            </div>
        );
    }
}