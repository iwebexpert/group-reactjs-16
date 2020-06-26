import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {AboutPage} from 'pages/AboutPage';
import {ContactsPage} from 'pages/ContactsPage';
import {PageNotFound} from 'pages/PageNotFound';

class AppRouting extends Component {
    state = {
        route: window.location.hash.substr(1)
    };

    componentDidMount(){
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1),
            });
        });
    }

    render() {
        let Child;
        switch (this.state.route) {
            case '':
            case '/':
                Child = AboutPage;
                break;
            case '/about':
                Child = AboutPage;
                break;
            case '/contacts':
                Child = ContactsPage;
                break;
            default:
                Child = PageNotFound;
        }

        return (
            <div>
                <ul>
                    <li><a href="#/">Главная</a></li>
                    <li><a href="#/about">О нас</a></li>
                    <li><a href="#/contacts">Контакты</a></li>
                    <li><a href="#/pagenotfound">Страница с ошибкой</a></li>
                </ul>
                <div>
                    <Child />
                </div>
            </div>
        )
    }
}

ReactDom.render(
    <AppRouting />,
    document.getElementById('root'),
);