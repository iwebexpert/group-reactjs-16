import React, {Component} from 'react';

import {Counter} from './Counter';

export class App2 extends Component {
    state = {
        isVisible: false,
    };

    handlerButtonClick = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    {this.state.isVisible && <Counter/>}
                    <button onClick={this.handlerButtonClick}>Скрыть/показать</button>
                </div>
            </div>
        );
    }
}