import React  from 'react';
import { Layout } from 'components/Layout';
import { Messager } from 'components/Messager';
import { ChatList } from 'components/ChatList';

export default function App() {
  const chats = [
    { id: 1, name: 'mainChat', active: true },
    { id: 2, name: 'secondChat' },
    { id: 3, name: 'oneMoreChat' },
    { id: 4, name: 'lastChat' },
  ]
  return (
    <Layout>
      <ChatList list={ chats }/>
      <Messager/>
    </Layout>
  );
}