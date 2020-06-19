import React, {Fragment} from 'react';

export class ListMessages extends React.Component {
    componentDidUpdate() {
        let elem = document.querySelector('.allMessages');
        elem.scrollBy(0, elem.scrollHeight);

        const lastMessage = document.querySelector('.allMessages').lastChild;
        if (sessionStorage.getItem('name') && lastMessage.dataset.author.toLowerCase() === sessionStorage.getItem('name').toLowerCase()) {
            lastMessage.classList.add('oneMessage__fromAuthor')
        }
    }

    render() {
        const {messages} = this.props;
        return (
            <div className="allMessages" id="123">
                {messages.map((message, index) =>
                    <p data-author={message.author} className="oneMessage" key={index}><sup>{message.author}:</sup> {message.text}</p>
                )}
            </div>
        )
    }
}