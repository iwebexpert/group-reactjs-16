import React from 'react';

export function ProfilePage(props) {
    return (
        <>
            <div>This is your profile.</div>
            <ul>
                <li>Your name: {props.profile.name}</li>
                <li>Your age: {props.profile.age}</li>
                <li>Your email: {props.profile.email}</li>
                <li>Your phone number: {props.profile.phoneNumber}</li>
            </ul>
        </>
    );
}
