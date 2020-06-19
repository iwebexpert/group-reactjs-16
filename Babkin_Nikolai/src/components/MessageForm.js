import React from 'react';

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

    render() {
        const {text} = this.state;

        return (
            <form className="messageForm">
                <input type="text" name="text" value={text} onChange={this.handlerInputChange} placeholder="Message"/>
                <button className='buttonElem' onClick={this.handlerButtonClick}>></button>
            </form>
        )
    }
}