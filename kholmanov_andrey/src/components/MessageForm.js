import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
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
        if (this.validate()) {
            const {onSend} = this.props;
            if(typeof onSend === 'function'){
                onSend(this.state);
                this.setState({text: ''});
            }
        }
    };

    validate = () => {
        const messageInput = document.querySelector('.massage-input');
        const messageTextarea = document.querySelector('.massage-textarea');

        if (this.state.author && this.state.text) {
            messageInput.classList.remove('error');
            messageTextarea.classList.remove('error');
            return true;
        } else {
            if (!this.state.author) {
                messageInput.classList.add('error');
            }
            if (!this.state.text) {
                messageTextarea.classList.add('error');
            }
            return false;
        }
    };

    render(){
        const {text, author} = this.state;

        return (
            <div className="message-new">
                <div className="message-form">
                    <input className="massage-input" name="author" type="text" value={author} placeholder="Author" onChange={this.handleInputChange} />
                    <textarea className="massage-textarea" name="text" value={text} placeholder="Text" onChange={this.handleInputChange} />
                </div>
                <button className="massage-submit" onClick={this.handleMessageSend}>Отправить</button>
            </div>
        );
    }

}