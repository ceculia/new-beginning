import React, { Component } from 'react'

class AboutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        // @param types title: string
      title: null
    }
  }
  render() {
    return (
      <div>
        <div>
            {this.props.title}
        </div>
      </div>
    )
  }
}

export default AboutPage