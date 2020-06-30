import React, {Component} from 'react';

import {MessengerRedux} from 'containers/MessengerContainer';
import {Header} from 'components/Header';
import {ChatListRedux} from 'containers/ChatListContainer';
import "./Layout.css";

export class Layout extends Component {
    /*state = {
        chatList: [],
        newChatName: '',
    }
    
    getChatList = (chatListData) => {
        this.setState({chatList: chatListData});
    }

    getNewChatName = (newChatName) => {
        this.setState({newChatName: newChatName});
    }*/
    
    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <ChatListRedux />
                    <MessengerRedux match={this.props.match} />
                </div>
            </div>
        );
    }
}
