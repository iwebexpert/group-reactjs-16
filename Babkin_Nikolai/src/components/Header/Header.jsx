import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <header className="chat-header">
                <h2 className="chat-header_h2">Messenger</h2>
            </header>
        );
    }

}