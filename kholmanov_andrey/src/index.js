/**
 * Created by ankho on 16.06.2020.
 */

import React from 'react';
import ReactDom from 'react-dom';

import {Messenger} from './components/Messenger';
import './style.css';

ReactDom.render(
    <div>
        <Messenger />
    </div>,
    document.getElementById('root'),
);