import React from 'react';
import axios from 'axios';
import MyInfo from './MyInfo';

class User extends React.Component {
    state = {
    name: [],
    }

    componentDidMount (){ 
    axios 
        .get ("https://api.github.com/users/Katrina-Dierking")
        .then (res => {
            this.setState ({
            img: res.data.avatar_url,
            name: res.data.name,
            info: res.data.bio,
        });
    })
        .catch (error => console.log(error.res.data));
}

     render () {
        return (
            <>
            <MyInfo 
                img = {this.state.avatar_url}
                name = {this.state.name}
                info = {this.state.bio}
                />
            </>
        )
     }
}

export default User; 
