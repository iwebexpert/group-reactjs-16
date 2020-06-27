import React from 'react';

export function ProfilePage( props ) {
  const { username, age, bio, loaded } = props;

  if ( !loaded ) {
    return <h2>Loading...</h2>;
  }
  if ( !username ) {
    return <h1>Hello GUEST!</h1>
  }

  return (
    <div className="profile">
      <b>Chat username:&nbsp;</b>{ username }
      <br/>
      <b>Age: { age } </b>
      <p>{ bio }</p>
    </div>
  );
}