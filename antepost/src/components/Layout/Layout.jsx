import React, {Component} from 'react';

import {Messenger} from 'components/Messenger';
import {Header} from 'components/Header';
import {ChatList} from 'components/ChatList';
import "./Layout.css";

export class Layout extends Component {
    state = {
        chatList: [],
        newChatName: '',
    }
    
    getChatList = (chatListData) => {
        this.setState({chatList: chatListData});
    }

    getNewChatName = (newChatName) => {
        this.setState({newChatName: newChatName});
    }
    
    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <ChatList chatListData={this.state.chatList} parentCallback={this.getNewChatName} />
                    <Messenger parentCallback={this.getChatList} match={this.props.match} newChatName={this.state.newChatName} />
                </div>
            </div>
        );
    }
}
