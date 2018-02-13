import React, {PureComponent} from 'react';

export default class EDcontainer extends PureComponent {
	render() {
		return(
			<div className={`${(this.props.fluid) ? `ed-container-fluid ` : `ed-container `}${(this.props.s) ? `s-${this.props.s} ` : ``}${(this.props.m) ? `m-${this.props.m} ` : ``}${(this.props.l) ? `l-${this.props.l} ` : ``}${(this.props.xl) ? `l-${this.props.xl} ` : ``}${(this.props.to) ? `to-${this.props.to} ` : ``}${(this.props.from) ? `from-${this.props.from} ` : ``}${(this.props.flex) ? `flex-${this.props.flex} ` : ``}${(this.props.main) ? `main-${this.props.main} ` : ``}${(this.props.cross) ? `cross-${this.props.cross} ` : ``}${(this.props.sFlex) ? `s-flex-${this.props.sFlex} ` : ``}${(this.props.mFlex) ? `m-flex-${this.props.mFlex} ` : ``}${(this.props.lFlex) ? `l-flex-${this.props.lFlex} ` : ``}${(this.props.xlFlex) ? `xl-flex-${this.props.xlFlex} ` : ``}${(this.props.sMain) ? `s-main-${this.props.sMain} ` : ``}${(this.props.mMain) ? `m-main-${this.props.mMain} ` : ``}${(this.props.lMain) ? `l-main-${this.props.lMain} ` : ``}${(this.props.xlMain) ? `xl-main-${this.props.xlMain} ` : ``}${(this.props.sCross) ? `s-cross-${this.props.sCross} ` : ``}${(this.props.mCross) ? `m-cross-${this.props.mCross} ` : ``}${(this.props.lCross) ? `l-cross-${this.props.lCross} ` : ``}${(this.props.xlCross) ? `xl-cross-${this.props.xlCross} ` : ``}${(this.props.sOffset) ? `s-offset-${this.props.sOffset} ` : ``}${(this.props.mOffset) ? `m-offset-${this.props.mOffset} ` : ``}${(this.props.lOffset) ? `l-offset-${this.props.lOffset} ` : ``}${(this.props.xlOffset) ? `xl-offset-${this.props.xlOffset} ` : ``}${(this.props.padding) ? ((this.props.padding === "0") ? 'no-padding ' : ((this.props.padding === "1") ? 'padding ' : `padding-${this.props.padding} `)) : ``}${(this.props.className) ? this.props.className : ``}`}>
				{this.props.children}
			</div>
		)
	}
}