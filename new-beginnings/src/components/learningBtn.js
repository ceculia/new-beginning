import React, { Component } from 'react'

class LearningBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <div>
        <div>hello</div>
        <button onClick={() => alert('click')}>
          { this.props.value }
        </button>
      </div>
    )
  }
}

export default LearningBtn