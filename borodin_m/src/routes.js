import {LayoutRedux} from "containers/LayoutContainer";

export const routes = [
    {
        path: '/',
        exact: true,
        component: LayoutRedux,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: LayoutRedux
    },
    {
        path: '/profile/',
        exact: true,
        component: LayoutRedux
    }
];