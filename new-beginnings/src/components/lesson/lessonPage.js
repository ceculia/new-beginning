import React, { Component } from 'react'
import CodeEditor from '../programming/ide.js'
import Feedback from '../feedback.js'

class Lesson extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lessonSelected: this.props.value
    }
  }

  render() {
    return (
      <div>
        <h1>Intro To Web Development</h1>
        <h3>Selected: {this.state.lessonSelected}</h3>
        <div className="app-container">
          <div> ASSIGNMENT COMPONENT </div>
          <CodeEditor />
          <div> RESOURCE COMPONENT </div>
          <Feedback />
          </div>
      </div>
    )
  }
}

export default Lesson
