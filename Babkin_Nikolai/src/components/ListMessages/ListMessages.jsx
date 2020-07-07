import React from 'react';
import './ListMessages.scss';
import Skeleton from '@material-ui/lab/Skeleton';
import {ModalWindow} from "components/ModalWindow";

export class ListMessages extends React.Component {
    componentDidUpdate() {
        let elem = document.querySelector('.allMessages');
        elem.scrollBy(0, elem.scrollHeight);
        this.markAuthorMessage();
    }

    componentDidMount() {
        this.markAuthorMessage();
    }

    markAuthorMessage() {
        const allMessages = document.getElementsByClassName('allMessages')[0].childNodes
        if (allMessages.length !== 0 && allMessages[0].nodeName === 'DIV') {
            for (let message of allMessages) {
                if (message.dataset.author.toLowerCase() === this.props.userName.toLowerCase()) {
                    message.classList.add('oneMessage__fromAuthor');
                } else {
                    message.classList.remove('oneMessage__fromAuthor');
                }
            }
        }
    }

    render() {
        const {messages, botPrinting, chatId, handlerRemoveMessage} = this.props;


        return (
            <div className="allMessages">
                {messages.map((message, index) =>
                    <div data-author={message.author} className="oneMessage" key={index}>
                        <p><sup>{message.author}:</sup> {message.text}</p>
                        <ModalWindow messages={messages}
                                     chatId={chatId}
                                     messageId={index}
                                     handlerRemoveMessage={handlerRemoveMessage}
                                     from="message"/>
                    </div>
                )}
                {botPrinting && <div data-author="Bot" className="skeleton-bot-printing">
                    <Skeleton variant="rect"
                              width={300}
                              height={51}/></div>}
            </div>
        )
    }
}