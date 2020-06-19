import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageField extends Component {
    state = {
        text: '',
        author: ''
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    };

    handleMessageSend = () => {
        const {onSend} = this.props;

        if (typeof onSend === 'function') {
            if (this.state.text !== "") {
                onSend(this.state);
            } else {
                alert("Напиши что-нибудь =)");
            }

            this.setState({text: ''});
        }
    };

    render() {
        const {text, author} = this.state;

        return (
            <div className="msg-input-wrap">
                <input name="author"
                       className="msg-input"
                       type="text"
                       value={author}
                       placeholder="Author"
                       onChange={this.handleInputChange}/>
                <textarea name="text"
                          className="msg-textarea"
                          value={text}
                          placeholder="Text"
                          onChange={this.handleInputChange}/>
                <button onClick={this.handleMessageSend} className="msg-button-submit">Send message</button>
            </div>
        );
    }
}