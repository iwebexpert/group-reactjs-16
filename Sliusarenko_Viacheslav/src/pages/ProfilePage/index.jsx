import React from 'react';

export function ProfilePage( props ) {
  const { username, name, age, languages, isFetching } = props;

  if ( isFetching ) {
    return <h2>Loading...</h2>;
  }

  if ( !username ) {
    return <h1>Hello GUEST!</h1>
  }

  return (
    <div className="profile">
      <b>Chat username:&nbsp;</b>{ name }
      <br/>
      <b>Age: { age } </b>
      <p>Languages{ languages.join(',') }</p>
    </div>
  );
}