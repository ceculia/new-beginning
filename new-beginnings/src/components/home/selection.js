import React, { Component } from 'react'

class Selection extends Component {

	styles = {
		box: {
		width: '200px',
		height: '200px'
		}
	}

	constructor(props) {
		super(props)
		this.state = {
			value: null,
		}
	}

	render() {
		return (
			<div>
			<button className="ba br3" style={this.styles.box} onClick={() => alert('click')}>
				JavaScript
				{ this.props.value }
			</button>
			</div>
		)
	}
}

export default Selection