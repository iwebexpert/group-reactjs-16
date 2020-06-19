import React, {Component, Fragment} from 'react';

export class Message extends Component {
    render() {
        console.log(this.props.index);
        return (
            <Fragment>
                {<li key={this.props.index}><b>{this.props.message.author}: </b>{this.props.message.text}</li>}
            </Fragment>
        );
    }
}