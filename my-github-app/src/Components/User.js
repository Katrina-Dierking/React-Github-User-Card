import React from 'react';
import axios from 'axios';
import Followers from './Followers';



class User extends React.Component {
    state = {
            user: {},
            followers: []
        }; 
    


    componentDidMount = () => { 
    axios.get ("https://api.github.com/users/Katrina-Dierking")
         .then (result => { console.log(result);
          this.setState ({
          user: result.data,
    
        });
    })
        .catch (error => console.log(error));


        axios.get ("https://api.github.com/users/Katrina-Dierking/followers")
        .then (result => { console.log(result);
        this.setState ({
        followers: result.data,
        });
    })
        .catch (error => console.log(error));
    };


    render () {
        const { user } = this.state;
        const { followers } = this.state;
        return (
            <>
               <div className = "github-layout">
                   <div className = "my-profile-section">
                       <img src = {user.avatar_url} alt = "My GitHub Act" className = "profile-img" /> 
                       <h1> {user.name}</h1>
                       <a href = {user.html_url} target = "blank" >
                           My Profile
                       </a>
                   </div>

                   <div className = "followers-section">
                       <h4>My Followers: </h4>
                       {followers.map (follower => {
                           return <Followers follower = {follower} />
                       })}
                   </div>
               </div>
            </>
        
        );
     }
}

export default User; 
