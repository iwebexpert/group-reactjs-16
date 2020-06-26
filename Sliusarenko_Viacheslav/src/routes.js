import withLayout from 'hoc/WithLayout';
import { ChatPage, ProfilePage } from 'pages';

export const routes = [
  {
    path: '/',
    exact: true,
    component: withLayout( ChatPage ),
  },
  {
    path: '/chats/:id([0-9]+)',
    exact: true,
    component: withLayout( ChatPage ),
  },
  {
    path: '/profile',
    exact: true,
    component: withLayout( ProfilePage ),
  }
]