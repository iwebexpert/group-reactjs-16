import withLayout from './templates/WithLayout';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';
import {Profile} from 'components/Profile';
import {MessengerRedux} from 'containers/MessengerContainer';

export const routes = [
    {
        path: '/',
        exact: true,
        component: withLayout(MessengerRedux),
    },
    {
        path: '/about',
        exact: true,
        component: withLayout(AboutPage),
    },
    {
        path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/1
        exact: true,
        component: withLayout(MessengerRedux),
    },
    {
        path: '/profile',
        exact: true,
        component: withLayout(Profile),
    },
    {
        path: '*',
        exact: false,
        component: withLayout(PageNotFound),
    },
];