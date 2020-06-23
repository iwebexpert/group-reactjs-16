import React, {Component} from 'react';

import './Footer.scss';

export class Footer extends Component {
    render() {
        const date = new Date().getFullYear();

        return (
            <div className="footer">
                <p>&copy; Все права защищены</p>
                <p>2020-{date} Messenger "HiApp"</p>
            </div>
        );
    }
}