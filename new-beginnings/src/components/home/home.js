import React, { Component } from 'react'
import Select from './select'
import About from './about'

class Home extends Component {
	render() {
		return (
			<div>
				<About />
				<Select />
			</div>
		)
	}
}

export default Home