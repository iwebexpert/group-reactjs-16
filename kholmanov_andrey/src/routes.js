import {ProfilePage} from 'pages/ProfilePage';
import {PageNotFound} from 'pages/PageNotFound';
import {MessengerRedux} from 'containers/MessengerContainer';
import {UsersRedux} from 'containers/UsersContainer';

export const routes = [
    {
        path: ['/', '/chats/:id([0-9]+)'],
        exact: true,
        component: MessengerRedux,
    },
    {
        path: '/profile',
        exact: false,
        component: ProfilePage,
    },
    // {
    //     path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/1
    //     exact: true,
    //     component: MessengerRedux,
    // },
    {
        path: '/users',
        exact: true,
        component: UsersRedux,
    },
    {
        path: '/user/:id([0-9]+)', //http://localhost:4000/chats/1
        exact: true,
        component: UsersRedux,
    },
    {
        path: '*',
        exact: false,
        component: PageNotFound,
    },
];