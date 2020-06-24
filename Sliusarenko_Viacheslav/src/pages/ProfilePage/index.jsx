import React  from 'react';

export function ProfilePage( props ) {
  const { userName } = props;

  if ( !userName ) {
    return <h1>Profile not Found!</h1>
  }

  return (
    <div>Profile</div>
  );
}