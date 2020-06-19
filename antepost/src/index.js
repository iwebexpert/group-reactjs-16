import React from 'react';
import ReactDom from 'react-dom';

import {Messenger} from './Messenger';
import './style.css';

const render = () => {
    ReactDom.render(
        <div>
            <Messenger />
        </div>,
        document.getElementById('root'),
    );
}

render();
