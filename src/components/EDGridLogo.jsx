import React from 'react';
import SVG from '../assets/images/EDgrid.svg'

const EDGridLogo = props => (
	<img src={SVG} alt={props.alt} width={props.size} className={props.className}/>
)

export default EDGridLogo;