import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';
import {Layout} from 'components/Layout';
import {Profile} from 'components/Profile';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/1
        exact: true,
        component: Layout,
    },
    {
        path: '/profile', //http://localhost:4000/chats/1
        exact: true,
        component: Profile,
    },
    {
        path: '*',
        exact: false,
        component: PageNotFound,
    },
];