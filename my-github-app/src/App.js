import React from 'react';
import User from './Components/User';
import Followers from './Components/Followers';



function App () {

  return (

    <div className = "App">
      <div className = "app-header">
        <h1>Katrina Dierking's GitHub User Card</h1>
        <User />
        <br></br>
        <h1>My Followers</h1>
        <Followers /> 
      </div>
    </div>

  );
}



export default App;
