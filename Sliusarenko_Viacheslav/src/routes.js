import withLayout from 'hoc/WithLayout';
import ChatsPageContainer from 'containers/ChatsPageContainer';
import ProfilePageContainer from 'containers/ProfilePageContainer';

export const routes = [
  {
    path: ['/', '/chats/:id?'],
    exact: true,
    component: withLayout( ChatsPageContainer ),
  },
  {
    path: '/profile',
    exact: true,
    component: withLayout( ProfilePageContainer ),
  }
]