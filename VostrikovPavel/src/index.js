import React from "react";
import ReactDom from "react-dom";

import {MessagesList} from './components/MessagesList';
//import {SendForm} from './components/SendForm';


ReactDom.render(
    <div>
        <MessagesList />
    </div>,
    document.getElementById('root')
)