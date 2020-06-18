/**
 * Created by ankho on 18.06.2020.
 */

import React, {Component} from 'react';

export class Message extends Component {
    state = {
        text: '',
        author: ''
    };

    componentDidMount()
    {
        this.setState({
            text: this.props.message.text,
            author: this.props.message.author
        });
    }

    render(){
        const {text, author} = this.state;

        return (
            <div className="message">
                {author}: {text}
            </div>
        );
    }
}
