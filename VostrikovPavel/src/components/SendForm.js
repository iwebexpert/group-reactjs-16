import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export class SendForm extends Component {
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

    handleMessageSend = (event) => {
        event.preventDefault();
        const {onSend} = this.props;

        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState({text: ''});
        }
    };

    render() {
        const {text, author} = this.state;

        return <form onSubmit={this.handleMessageSend}>
                <input name="author" type="text" value={author} placeholder="Имя" onChange={this.handleInputChange}/>
                <input name="text" type="text" value={text} placeholder="Сообщение" onChange={this.handleInputChange}/>
                <button type="submit">Отправить</button>
            </form>
    }
}
