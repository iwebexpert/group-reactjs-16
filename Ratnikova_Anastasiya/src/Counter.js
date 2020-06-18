import React, {Component} from 'react';

export class Counter extends Component {
    state = {
        counter: 1
    };

    interval = null;

    handleButtonClick = (event) => { // Вызываем стрелочную, т.к. onClick работает с функцией, а не со значением
        const action = +event.target.dataset.action;
        this.setState({
            counter: this.state.counter + action
        });
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.interval = setInterval(() => {
            console.log('Get data');
        }, 1000)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.interval)
    }

    render() {
        return <div>
            <h1>Counter visible</h1>
            <div>Counter: {this.state.counter}</div>

            <button data-action="-1" onClick={this.handleButtonClick}>-1</button>
            <button data-action="+1" onClick={this.handleButtonClick}>+1</button>
        </div>;
    }
}