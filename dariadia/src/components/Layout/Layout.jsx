import React, { Component } from "react";

import { Header } from "components/Header";
import { Messenger } from "components/Messenger";

import "./Layout.scss";

export class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Messenger />
      </>
    );
  }
}
