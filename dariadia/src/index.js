import React from "react";
import ReactDom from "react-dom";

import { Messenger } from "./components/messenger/Messenger";
import "./main.scss";

ReactDom.render(
  <>
    <Messenger />
  </>,
  document.getElementById("root")
);
