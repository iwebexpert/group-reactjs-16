import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CloseIcon from '@material-ui/icons/Close';

import './Message.sass';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export class Message extends Component {
    static propTypes = {
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        messageID: PropTypes.number.isRequired,
    };

    messageRemove = (event) => {
        let elem = null;
        if (event.target.tagName === 'svg') {
            elem = event.target;
        } else if (event.target.tagName === 'path') {
            elem = event.target.parentElement;
        }

        if (elem) {
            const {messageRemove} = this.props;
            const id = elem.dataset.id;
            messageRemove(id);
        }
    };

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
                <CloseIcon
                    data-id={this.props.messageID}
                    fontSize="small" onClick={this.messageRemove}/>
            </div>
        )
    }
}