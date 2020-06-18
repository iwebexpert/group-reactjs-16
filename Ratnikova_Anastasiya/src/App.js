import React, {Component} from 'react';

export class App extends Component {
    state = {
        counter: 10
    }

/*    handlePlusClick = () => {
        this.setState({counter: this.state.counter + 1});
    }

    handleMinusClick = () => {// конструкция '= () =>' для указания контекста
        this.setState({counter: this.state.counter - 1});
    }*/

/*    handleButtonClick = (operation) => () => { // Вызываем стрелочную, т.к. onClick работает с функцией, а не со значением
        this.setState({
            counter: this.state.counter + operation
        });
    }*/

    handleButtonClick = (event) => { // Вызываем стрелочную, т.к. onClick работает с функцией, а не со значением
        const action = +event.target.dataset.action;
        this.setState({
            counter: this.state.counter + action
        });
    }

    render() {
        return <div>
            <h1>Hello, React!</h1>
            <div>Counter: {this.state.counter}</div>

            <button data-action="-1" onClick={this.handleButtonClick}>-1</button>
            <button data-action="+1" onClick={this.handleButtonClick}>+1</button>
        </div>;
    }
}