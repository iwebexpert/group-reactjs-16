import React from 'react';
import './MessageForm.scss';
import SendIcon from '@material-ui/icons/Send';

export class MessageForm extends React.Component {
    state = {
        text: '',
    }

    handlerInputChange = (event) => {
        const inputName = event.target.name;
        this.setState({
            [inputName]: event.target.value
        })
    }

    handlerButtonClick = (event) => {
        event.preventDefault();
        const author = sessionStorage.getItem('name');
        if (this.state.text === '' || !author) return;
        this.props.handlerCallback({
            author: author,
            text: this.state.text
        })
        this.setState({text: ''});
    }

    componentDidMount() {
        document.querySelector('.messageForm_input').focus()
    }

    componentDidUpdate() {
        document.querySelector('.messageForm_input').focus()
    }

    render() {
        const {text} = this.state;

        return (
            <form className="messageForm">
                <input className="messageForm_input" type="text" name="text" value={text}
                       onChange={this.handlerInputChange} placeholder="Message"/>
                <button className='buttonElem' onClick={this.handlerButtonClick}><SendIcon /></button>
            </form>
        )
    }
}