import {ProfilePage} from 'pages/ProfilePage';
import {PageNotFound} from 'pages/PageNotFound';
import {Layout} from 'components/Layout';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/profile',
        exact: false,
        component: ProfilePage,
    },
    {
        path: '/chat/:id([0-9]+)', //http://localhost:4000/chats/1
        exact: true,
        component: Layout,
    },
    {
        path: '*',
        exact: false,
        component: PageNotFound,
    },
];