import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Getuser from './getuser';
//import Postuser from './postuser';
import Getemployee from './Getemployee';
//import Deleteuser from './Deleteuser';
import Postemployee from './Postemployee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Postemployee/>
        <Getemployee/>
        
        
         

      </div>
    );
  }
}

export default App;
