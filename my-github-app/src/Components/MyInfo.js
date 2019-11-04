import React from 'react';

const MyInfo = ({ img, name, bio}) => {
    return (
        <div className = "profile-card">

            <img src = {img} alt = "my profile pic" className = "profile-pic" />
            <h3 className = "user"> Name: {name}</h3>
            <h2 className = "info"> Info: {bio}</h2>
        </div>
    )
}

export default MyInfo; 

    