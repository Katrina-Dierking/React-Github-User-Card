import React from 'react';
import axios from 'axios'; 


function Followers (props) {
    return (
        <div className = "follower-box">
            <img src = {props.follower.avatar_url} alt = "follower of Katrina Dierking" className = "follower-img" />
            <p>{props.follower.login}</p>
        </div>
    );
}

export default Followers; 