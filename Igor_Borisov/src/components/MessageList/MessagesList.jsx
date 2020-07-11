import React, {Component} from 'react';
import {Message} from 'components/Message';

import './MessageList.css' ;
import classNames from "classnames";

export class MessagesList extends Component {

  componentDidUpdate() {
    const chatElement = document.querySelector('.tickets-chat-main__messages');
    chatElement.scrollTop = chatElement.scrollHeight;
  }

  render() {
    const {messages} = this.props;

    return (

      <div className="tickets-chat-main__messages">
        {
          messages.map((message, index) => {
              const classes = classNames('message', {
                'message-supports': message.author === 'bot',
                'message-me': message.author !== 'bot',
              });

              return <div className={classes}
                          key={index}>
                <Message text={message.text} author={message.author}/>
              </div>

            }
          )
        }
      </div>
    );
  }

}