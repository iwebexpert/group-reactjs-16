import React  from 'react';

export function ProfilePage( props ) {
  const userName = localStorage.getItem('author');

  if ( !userName ) {
    return <h1>Hello GUEST!</h1>
  }

  return (
    <div className="profile">
       <b>Chat userName:&nbsp;</b>{ userName }
       <b>Total chats:</b>
    </div>
  );
}