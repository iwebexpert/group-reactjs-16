import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import './SendForm.css';

export class SendForm extends Component {
    state = {
        text: '',
        author: '',
        error : false
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
        if (this.state.text === '') {
            this.setState({ error: true});
            return;
        }
        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState({text: '', error: false});
        }
    };

    render() {
        const {text, author} = this.state;

        return <form onSubmit={this.handleMessageSend} >
                <TextField name="author"
                           type="text"
                           value={author}
                           placeholder="Отправитель"
                           label="Отправитель"
                           variant="outlined"
                           size="small"
                           onChange={this.handleInputChange}
                           className="sender"
                           margin='dense' />
                <TextField name="text"
                           type="text"
                           value={text}
                           placeholder="Сообщение"
                           label="Сообщение"
                           variant="outlined"
                           size="small"
                           onChange={this.handleInputChange}
                           error={this.state.error}
                           className="message"
                           margin='dense'
                           />
                <Button type="submit"
                        variant="contained"
                        color="primary"
                        className="button"
                        endIcon={<Icon>send</Icon>}>Отправить</Button>
            </form>
    }
}
