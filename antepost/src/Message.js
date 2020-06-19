import React, {Component} from 'react';

export class Message extends Component {
    render()
    {
        const {message} = this.props;
        return (
            <li><b>{message.author}: </b>{message.text}</li>
        );
    }
}
