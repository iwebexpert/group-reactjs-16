import withLayout from './templates/WithLayout';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';
import {MessengerRedux} from 'containers/MessengerContainer';
import {ProfileRedux} from 'containers/ProfileContainer';

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
        component: withLayout(ProfileRedux),
    },
    {
        path: '*',
        exact: false,
        component: withLayout(PageNotFound),
    },
];