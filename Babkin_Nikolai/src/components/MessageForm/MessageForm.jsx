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
        const {chats, chatId} = this.props
        let isExistChat = false;
        for (let chat of chats) {
            isExistChat = chat._id === chatId
        }

        const author = this.props.userName;
        if (this.state.text === '' || !author || !isExistChat) return;
        this.props.handerlSendMessage({
            author,
            text: this.state.text,
            chatId: this.props.chatId,
            botPrinting: true,
        })
        this.setState({text: ''});
    }

    componentDidMount() {
        document.querySelector('.messageForm_input').focus();
    }

    componentDidUpdate() {
        document.querySelector('.messageForm_input').focus();
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