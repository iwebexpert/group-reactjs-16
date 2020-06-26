import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
    state = {
        author: '',
        text: ''
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
    };

    handleInput = event => {
        const inputName = event.target.name;
        this.setState({
            [inputName]: event.target.value
        })
    };
    handleSendMessage = event => {
        event.preventDefault();
        const {onSend} = this.props;

        if (typeof onSend === 'function') {
            onSend(this.state);
            this.setState({text: ''});
        }
    };

    render() {
        const {text, author} = this.state;
        return(
        <form onSubmit={this.handleSendMessage} method="post">
            <input type="text" value={author} name="author" placeholder="Автор" onChange={this.handleInput}/>
            <textarea rows="5" value={text} name="text" placeholder="Сообщение..." onChange={this.handleInput}/>
            <button type="submit">Отправить</button>
        </form>
        );
    }
}