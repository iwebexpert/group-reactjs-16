import {Message} from "../Message/";
import React from "react";
import {SendForm} from "../SendForm/";

import './MessagesList.css'

export class MessagesList extends React.Component {
    state = {
        messages: [
            {name: "system", text: 'Добро пожаловать в чат'},
        ],
        name: "",
        text: ""
    }

    componentDidMount() {
        this.setState(
            {messages: this.state.messages.concat(
                {name:'bot', text: 'Сообщения загружены...'})});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].name !== 'bot'){
            this.setState({messages: this.state.messages.concat(
                    {name:'bot', text: 'Сообщение отправлено.'})});
        }
    }

    handleSend = (message) => {
        //console.log(message.text);
        this.setState(
            {messages: this.state.messages.concat(
                    [ {name: message.author, text: message.text} ])});
    }

    render() {
        return <div className="back">
            <div className="list">
                {this.state.messages.map((item , index) =>
                    <Message text={item.text} author={item.name} key={index}/>)}
            </div>
            <SendForm onSend={this.handleSend}/>
        </div>

    }
}