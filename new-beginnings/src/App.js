import React, { Component } from 'react'
import Home from './components/home/home'
import Lesson from './components/lesson/lessonPage.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {selectionMade: false}
  }

  handleSelection() {
    this.setState(prevState => ({
      selectionMade: !prevState.selectionMade
    }))
  }

  render() {
    if (!this.state.selectionMade) {
      // No Selection has been made yet
      return (
        <div className="app-container">
          <h4>No Selection Made</h4>
          <div className="App">
            <button 
              onClick={(e) => this.handleSelection(e)}
              >Change View</button>
            <Home></Home>
          </div>
        </div>
      )
    } else {
    // Selection Made, Lesson has the prop 
    // value of javascript to simulate the passing
    // props to the LessonPage view
      return (
        <div className="app-container">
          <h4>Selection Made</h4>
          <div className="App">
            <button 
              onClick={(e) => this.handleSelection(e)}
            >Change View</button>
            <Lesson value="JavaScript" />
          </div>
        </div>
      )
    }
  }
}

export default App
