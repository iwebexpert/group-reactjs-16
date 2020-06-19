import React from 'react';

export class Message extends React.Component {
    // componentDidMount() {
    //     console.log(this.props);
    // }

    render() {
        return <div><b>{this.props.author} : </b> <i> {this.props.text}</i></div>
    }
}