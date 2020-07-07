import { Layout } from 'components/Layout';
import { ProfilePageRedux } from 'containers/ProfilePageContainer';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/chats/:id([0-9a-zA-Z]+)',
        exact: true,
        component: Layout,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePageRedux,
    },
];
