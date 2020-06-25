import {Layout} from "components/Layout";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: Layout
    },
    {
        path: '/profile/',
        exact: true,
        component: Layout
    }
];