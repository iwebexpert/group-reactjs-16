import React from 'react'
import {ListMessages} from "components/ListMessages";
import {MessageForm} from "components/MessageForm";
import {ChatList} from "components/ChatList";
import './Messenger.scss';
import {Header} from "components/Header";

export class Messenger extends React.Component {
    componentDidMount() {
        // if (sessionStorage.getItem('name')) {
        //     document.querySelector('.messenger').style.opacity = '1';
        // } else {
        //     document.querySelector('.messenger').style.opacity = '0';
        //     document.location.href = this.props.redirect('/');
        // }
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
            handlerRemoveChat,
            redirect,
            isLoading,
            isError
        } = this.props;

        if (isLoading) return <div>Loading...</div>;
        if (isError) return <div>Error...</div>;

        return (
            <div className="messenger">
                <Header pageName={pageName}/>
                <div className="messenger__main">
                    <ChatList
                        handlerAddChat={handlerAddChat}
                        handlerRemoveChat={handlerRemoveChat}
                        chatId={chatId}
                        chats={chats}
                        redirect={redirect}/>
                    <div className='messenger_chat'>
                        <ListMessages
                            messages={messages}
                            botPrinting={botPrinting}
                            chatId={chatId}
                            handlerRemoveMessage={handlerRemoveMessage}
                            userName={userName}/>
                        <MessageForm userName={userName}
                                     handerlSendMessage={handlerSendMessage}
                                     chatId={chatId}/>
                    </div>
                </div>
            </div>
        );
    }
}