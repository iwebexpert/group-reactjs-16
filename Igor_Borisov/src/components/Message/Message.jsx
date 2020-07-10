import React, {Component, Fragment} from 'react';
import classNames from 'classnames';

import './Message.css';

export class Message extends Component {

    render() {

      const classes = classNames('message-info', {
        'message-info-supports': this.props.author === 'bot',
        'message-info-me': this.props.author !== 'bot',
      });
      
        return (
            <Fragment>
                <p>{this.props.text}</p>
                <div
                    className={classes}>
                    <p>{this.props.author}</p>
                </div>
            </Fragment>

        )
    }
}