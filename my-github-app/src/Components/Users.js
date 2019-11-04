import React from 'react';

function Users (props) {

    return (
        <>
        <h1>{props.users.name}</h1>
        <br></br>
        <div className = "profile-img">
        <img src = {props.users.avatar_url} alt = "User Avatar" />
        </div>
        <h3>Followers:{props.users.followers}</h3>
        </>
    );
}

export default Users; 
