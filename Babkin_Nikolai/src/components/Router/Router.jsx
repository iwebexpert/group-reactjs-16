import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from "components/Layout";
import {PageNotFound} from "components/PageNotFound";
import {MessengerRedux} from "containers/MessengerContainer";

export class Router extends React.Component {
    routes = [
        {
            path:['/', '/profile'],
            exact: true,
            component: Layout,
        },
        {
            path: ['/chats/:id([a-zA-Z0-9]+)'],
            exact: true,
            component: MessengerRedux,
        },
        {
            path: '*',
            exact: false,
            component: PageNotFound,
        },
    ]

    render() {
        return (
            <Switch>
                {this.routes.map((route, index) => {
                    return <Route {...route} key={index}/>
                })}
            </Switch>
        );
    }
}