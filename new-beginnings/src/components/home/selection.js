import React, { Component } from 'react';

class Selection extends Component {

	styles = {
		box: {
		width: '200px',
		height: '200px'
		}
	}

	render() {
		return (
			<div className="ba br3" style={this.styles.box}>
				selection
			</div>
		);
	}
}

export default Selection;