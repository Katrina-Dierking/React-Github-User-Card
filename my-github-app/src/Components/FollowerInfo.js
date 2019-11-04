import React from 'react';

const FollowerInfo = ({followers, img}) => {
    return (
        <div className="follower-info">

            <img src={img} alt="github-follower" className = "follower-photo"/>
            <h3 className="name">Name: {followers}</h3>
            

        </div>
    )
}

export default FollowerInfo;