import React, {PureComponent} from 'react';

export default class EDvideo extends PureComponent {
	render() {
		return (
			<div className={`ed-video ${(this.props.className) ? this.props.className : ``}`}>
				{this.props.children}
			</div>
		)
	}
}