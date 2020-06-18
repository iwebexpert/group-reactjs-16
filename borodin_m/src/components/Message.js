import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    static propTypes = {
        message: PropTypes.object.isRequired,
    };

    render() {
        const {message} = this.props;

        return (
            <div className="msg-message">
                <span className="msg-author">{message.author}:</span>{message.text}
            </div>
        )
    }
}