import React, { Component } from "react";

import { ChatList } from "components/ChatList";
import { Header } from "components/Header";
import { Messenger } from "components/Messenger";

import "./Layout.scss";

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="chats__wrapper">
          <ChatList />
          <Messenger />
        </div>
      </>
    );
  }
}
