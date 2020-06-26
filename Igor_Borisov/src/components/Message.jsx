import React, {Component, Fragment} from 'react';

export class Message extends Component {

    render() {
        return (
            <Fragment>
                <p>{this.props.text}</p>
                <div
                    className={this.props.author === 'bot' ? 'message-info message-info-supports' : 'message-info message-info-me'}>
                    <p>{this.props.author}</p>
                </div>
            </Fragment>

        )
    }
}