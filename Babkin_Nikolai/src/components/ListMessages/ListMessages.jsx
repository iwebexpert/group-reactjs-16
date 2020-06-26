import React from 'react';
import './ListMessages.scss';

export class ListMessages extends React.Component {
    componentDidUpdate() {
        let elem = document.querySelector('.allMessages');
        elem.scrollBy(0, elem.scrollHeight);
        this.markAuthorMessage();
    }

    markAuthorMessage() {
        if (sessionStorage.getItem('name')) {
            const allMessages = document.getElementsByClassName('allMessages')[0].childNodes
            for (let message of allMessages) {
                if (message.dataset.author.toLowerCase() === sessionStorage.getItem('name').toLowerCase()) {
                    message.classList.add('oneMessage__fromAuthor');
                } else {
                    message.classList.remove('oneMessage__fromAuthor');
                }
            }
        }
    }

    render() {
        const {messages} = this.props;

        return (
            <div className="allMessages">
                {messages.map((message, index) =>
                    <p data-author={message.author} className="oneMessage" key={index}>
                        <sup>{message.author}:</sup> {message.text}
                    </p>
                )}
            </div>
        )
    }
}