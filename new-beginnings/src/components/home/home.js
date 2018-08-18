import React, { Component } from 'react';
import Select from './select';
import About from './about';

class Home extends Component {
	render() {
		return (
			<div>

				<Select></Select>
				<About></About>
			</div>
		);
	}
}

export default Home;