import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';

class Followers extends React.Component {
    constructor() {
        super()
        this.state = {
        followers: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/Katrina-Dierking/followers')
            .then(res => {
                this.setState({
                followers: res.data
                });
                console.log(res.data);
            })
            .catch(error => 
            console.log(error.res)
            )
    }
    

  render() {
    return (
        
        <div className = "collection">
            {this.state.followers.map (follower => (
                <div className = "cards">
                    key={follower.id}
                    url={follower.avatar_url}
                    login={follower.login}
                
                </div>
            ))}
        </div>
    );
  }
}
export default Followers;