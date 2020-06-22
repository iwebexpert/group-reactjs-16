import React from 'react';

import './Message.css';

export class Message extends React.Component {

    styles =(author) => {
        return author === 'bot' ? "bot" : "user";
    }

    render() {
        return <div className={this.styles(this.props.author)}>
            <b>{this.props.author} : </b>
            <i> {this.props.text}</i>
        </div>
    }
}