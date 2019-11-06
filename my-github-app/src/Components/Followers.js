import React from 'react';


function Followers (props) {
    return (
        <div className = "follower-box">
            <img src = {props.follower.avatar_url} alt = "follower of Katrina Dierking" className = "follower-img" />
            <h2>{props.follower.login}</h2>
        </div>
    );
}

export default Followers; 