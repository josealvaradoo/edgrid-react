import React, {Component} from 'react';

export default class EDvideo extends Component {
	render() {
		return (
			<div className={`ed-video ${(this.props.className) ? this.props.className : ``}`}>
				{this.props.children}
			</div>
		)
	}
}