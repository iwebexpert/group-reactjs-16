import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.sass';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export class Message extends Component {
    static propTypes = messageType;

    render() {
        const {author, text} = this.props;

        const classes = classNames(
          'msg-message',
          {
              'msg-bot': author === 'Bot',
              'msg-owner': author !== 'Bot',
          }
        );

        return (
            <div className={classes}>
                <span className="msg-author">{author}{author ? ":" : ""}</span>
                {text}
            </div>
        )
    }
}