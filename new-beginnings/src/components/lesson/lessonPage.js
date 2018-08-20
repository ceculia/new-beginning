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
          <div class="flex flex-column">
              <div class="outline w-25 pa5 mr2">
              <code>ASSIGNMENT COMPONENT</code>
              </div>
              <div class="outline w-25 pa5 mr2">
              <CodeEditor/>
              </div>
              <div class="outline w-25 pa5 mr2">
                <code>RESOURCE COMPONENT</code>
                  <div class='pa2'>
                      <a href="https://www.codecademy.com/learn/learn-python">Codecademy</a>
                  </div>
                  <div>
                      <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
                  </div>
              </div>
              <div class="outline w-25 pa5 mr2">
                <Feedback/>
              </div>
          </div>
          
          </div>
      </div>
    )
  }
}

export default Lesson
