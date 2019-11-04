import React from 'react';
import axios from 'axios'; 
import FollowerInfo from './FollowerInfo';

class Followers extends React.Component {
    state = {
    followers: [],
    }

    componentDidMount = () => {
        axios.get ("https://api.github.com/users/Katrina-Dierking/followers")
             .then (res => { console.log("followers", res.data);
              this.setState ({
              followers: res.data,
            });
        }) 
        .catch (error => console.log(error));
    }

    render () {
        return (
            <>
                {this.state.followers.map (follower => (
                    <FollowerInfo 
                        key = {follower.id}
                        followers = {follower.login}
                        img = {follower.avatar_url}
                        bio = {follower.bio}
                    
                    />
                ))}
            </>
        );
    }
}

export default Followers; 