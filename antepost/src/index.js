import React from 'react';
import ReactDom from 'react-dom';

import {Layout} from './components/Layout';

const render = () => {
    ReactDom.render(
        <div>
            <Layout />
        </div>,
        document.getElementById('root'),
    );
}

render();
