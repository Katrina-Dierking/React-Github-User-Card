import React from 'react';
import axios from 'axios';
import Users from './Components/Users';



class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      users: [], 
      followers: []
    }
  }

  componentDidMount() {
    axios 
      .get ("https://api.github.com/users/Katrina-Dierking")
      .then(res => this.setState({users:res.data}))
  
    axios 
      .get ("https://api.github.com/users/Katrina-Dierking/followers")
      .then(res => this.setState({followers:res.data}))
  }  

render () {
  return (
    <>
    <div className = "App">
      <div className = "app-header">
        <h1>Katrina Dierking's GitHub Profile</h1>
        <br></br>
        <h1>My Followers</h1>
      </div>

      <Users users = {this.state.users}
             followers={this.state.followers}/>

      {/* {this.state.followers.map(follower => {
        return <Followers login = {follower.login}/>
      })}  */}
      
    </div>
  </>
  );
}
}


export default App;
