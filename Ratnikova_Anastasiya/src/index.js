import React from 'react';
import ReactDom from 'react-dom';

import {App} from './App';
import {App2} from "./App2";
import {Messenger} from "./Messenger";
import './main.scss';

//JSX - webpack не понимает, нужен babel и плагин

const wordData = ['word', 'WORD', 'worD', 'Word'];

const Button = (props) => {
	const clickHandler = (event) => {
		wordData.push(props.word);
		document.getElementById('array-words').innerHTML = `<div class="word yellow">${wordData}</div>`;
		document.getElementById('new-words').innerHTML += `<div class="word yellow">${props.word}</div>`;
	};
	return <div onClick={clickHandler} className="add-btn">{props.placeholder} "{props.word}"</div>
};

const SayWord = (props) => <div className="word aqua">{props.word}</div>;
const SayWords = ({data}) => {
	return data.map((item, index) => <SayWord word={item} key={index}/>);
};

ReactDom.render(
	<div>
		<Button placeholder="Добавить слово" word="WoRd" />
		{/*<div className="words">
			<div className="old-words">
				<SayWords data={wordData} />
			</div>
			<div className="new-words" id="new-words"></div>
		</div>
		<div id="array-words"></div>*/}
		<Messenger />
	</div>,
	document.getElementById('root'),
);
