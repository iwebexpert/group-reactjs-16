import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export class Message extends Component {
    static propTypes = messageType;

    get direction()
    {
        return this.props.author === 'Bot' ? 'start' : 'end';
    }

    render()
    {
        const {text, author} = this.props;

        const classes = classNames('message', {
            'message-bot': author === 'Bot',
            'message-owner': author !== 'Bot',
        });

        return (
            <div className={classes}>
                <div>{text}</div>
                <div className="message-sender">{author}</div>
            </div>
        );
    }
}
