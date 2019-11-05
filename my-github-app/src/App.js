import React from 'react';
import User from './Components/User';
import "./App.css";




function App () {

  return (

    <div className = "App">
      <div className = "app-header">
        <div className = "top">
        <h1>Katrina Dierking's GitHub User Card</h1>
        </div>
        <User />
      </div>
    </div>

  );
}



export default App;
