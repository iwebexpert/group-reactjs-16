import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Layout} from "components/Layout";
import {PageNotFound} from "components/PageNotFound";
import {Profile} from "components/Profile";

export class Router extends React.Component {
    routes = [
        {
            path: '/',
            exact: true,
            component: Layout,
        },
        {
            path: '/chats/:id([0-9]+)',
            exact: true,
            component: Layout,
        },
        {
            path: '/profile',
            exact: true,
            component: Layout,
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