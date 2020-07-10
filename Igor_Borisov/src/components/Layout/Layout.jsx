import React, {Component} from 'react';
import {MessageForm} from 'components/MessageForm';
import {MessagesList} from 'components/MessageList';
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';

import './Layout.css';

export class Layout extends Component {

  state = {
    messages: [],
  };

  botMessages = [
    'Когда орангутанги чувствуют опасность, они предупреждают врага громкой отрыжкой.',
    'Сделав всего один вдох, бобер может проплыть под водой до 800 метров.',
    'А вот пирожное (а затем и торт) с названием "Наполеон" свое имя и происхождение связывает не с Францией, как можно было бы предположить, а с Россией',
    'В гонках Формулы-1 нет автомобиля с номером 13.',
    'Мокрицы ближе по строению к креветкам, чем к насекомым',
    'Свиньи не умеют потеть - у них нет потовых желез. Избыточное тепло эти животные отводят, валяясь в грязи',
    'Старт космического челнока Аполло 13 произошел в 13 часов 13 минут. Астронавты отменили полет и вернулись на Землю 13 апреля в пятницу.']

  componentDidUpdate() {
    const lastMessage = this.state.messages[this.state.messages.length - 1];
    if (lastMessage.author !== 'bot') {
      const randIndex = Math.floor(Math.random() * this.botMessages.length);
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{
            text: `Интересный факт, ${lastMessage.author}: ${this.botMessages[randIndex]}`,
            author: 'bot'
          }])
        })
      }, 2000)
    }
  }

  handleMessage = message => {
    if (message.text !== '' && message.author !== '') {
      this.setState({
        messages: this.state.messages.concat([{text: message.text, author: message.author}])
      })
    }
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="tickets-chat-main">
          <div className="tickets-chat-left">
            <MessagesList messages={this.state.messages}/>
            <MessageForm onSend={this.handleMessage}/>
          </div>
          <div className="tickets-chat-right">
            <ChatList/>
          </div>

        </div>
      </div>
    );
  }
}