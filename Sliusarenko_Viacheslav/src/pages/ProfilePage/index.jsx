import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext";

export function ProfilePage( props ) {
  const { author } = useContext( UserContext );

  if ( !author ) {
    return <h1>Hello GUEST!</h1>
  }

  return (
    <div className="profile">
       <b>Chat userName:&nbsp;</b>{ author }
       <br/>
       <b>Total chats:</b>
    </div>
  );
}