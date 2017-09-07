import React, { Component } from 'react';
import './App.css';
import TweetList from './componets/Tweets/TweetsList';
import Login from './componets/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Twitter Clon!</h2>
        </div>
        <div className="App-intro">
            <Login/>
        </div>
      </div>
    );
  }
}

export default App;
