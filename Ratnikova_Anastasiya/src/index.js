import React from 'react';
import ReactDom from 'react-dom';

import {App} from './App';
import {App2} from "./App2";
import {Messenger} from "./Messenger";
import './main.scss';

ReactDom.render(
	<div>
		<Messenger />
	</div>,
	document.getElementById('root'),
);
