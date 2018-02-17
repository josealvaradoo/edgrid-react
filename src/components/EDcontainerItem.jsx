import React, {Component} from 'react';

export default class EDcontainerItem extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
			className: ""
		}
		this.classes = this.classes.bind(this);
	}

	componentWillMount() {
		this.classes();
	}

	classes() {
		let className = "ed-item ";
		className = (this.props.fluid) ? `${className}ed-container-fluid ` : `${className}ed-container `
		className = (this.props.s) ? `${className}s-${this.props.s} ` : className
		className = (this.props.m) ? `${className}m-${this.props.m} ` : className
		className = (this.props.l) ? `${className}l-${this.props.l} ` : className
		className = (this.props.xl) ? `${className}l-${this.props.xl} ` : className
		className = (this.props.to) ? `${className}to-${this.props.to} ` : className
		className = (this.props.from) ? `${className}from-${this.props.from} ` : className
		className = (this.props.flex) ? `${className}flex-${this.props.flex} ` : className
		className = (this.props.main) ? `${className}main-${this.props.main} ` : className
		className = (this.props.cross) ? `${className}cross-${this.props.cross} ` : className
		className = (this.props.sFlex) ? `${className}s-flex-${this.props.sFlex} ` : className
		className = (this.props.mFlex) ? `${className}m-flex-${this.props.mFlex} ` : className
		className = (this.props.lFlex) ? `${className}l-flex-${this.props.lFlex} ` : className
		className = (this.props.xlFlex) ? `${className}xl-flex-${this.props.xlFlex} ` : className
		className = (this.props.sMain) ? `${className}s-main-${this.props.sMain} ` : className
		className = (this.props.mMain) ? `${className}m-main-${this.props.mMain} ` : className
		className = (this.props.lMain) ? `${className}l-main-${this.props.lMain} ` : className
		className = (this.props.xlMain) ? `${className}xl-main-${this.props.xlMain} ` : className
		className = (this.props.sCross) ? `${className}s-cross-${this.props.sCross} ` : className
		className = (this.props.mCross) ? `${className}m-cross-${this.props.mCross} ` : className
		className = (this.props.lCross) ? `${className}l-cross-${this.props.lCross} ` : className
		className = (this.props.xlCross) ? `${className}xl-cross-${this.props.xlCross} ` : className
		className = (this.props.sOffset) ? `${className}s-offset-${this.props.sOffset} ` : className
		className = (this.props.mOffset) ? `${className}m-offset-${this.props.mOffset} ` : className
		className = (this.props.lOffset) ? `${className}l-offset-${this.props.lOffset} ` : className
		className = (this.props.xlOffset) ? `${className}xl-offset-${this.props.xlOffset} ` : className
		className = (this.props.padding) ? (this.props.padding === "0") ? `${className}no-padding ` : (this.props.padding === "1") ? `${className}padding ` : `${className}padding-${this.props.padding} ` : className
		className = (this.props.className) ? `${className}${this.props.className}` : className

		this.setState({ className })
	}
	render() {
		return(
			<div className={this.state.className}>
				{this.props.children}
			</div>
		)
	}
}