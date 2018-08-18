import React, { Component } from 'react';
import Home from './components/home/home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
				<h4>header component will go here</h4>
        <div className="App">
				<Home></Home>
				</div>
      </div>
			
    )
  }
}

export default App;
