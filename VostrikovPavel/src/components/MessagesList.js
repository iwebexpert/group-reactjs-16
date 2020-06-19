import {Message} from "./Message";
import React from "react";
import {SendForm} from "./SendForm";

export class MessagesList extends React.Component {
    state = {
        messages: [
            {name: "system", text: 'Строка'},
            {name: "system", text: 'Еще одна строка'},
            {name: "system", text: 'Снова строка'},
            {name: "system", text: 'Последняя'},
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
        return <div>
            {this.state.messages.map((item , index) =>
                <Message text={item.text} author={item.name} key={index}/>)}
            <SendForm onSend={this.handleSend}/>
        </div>

    }
}