import React from 'react';

const Footer = () => {
	return (
		<div style={footer}>
			<h1>my footer</h1>
		</div>
	);
};

export default Footer;

const footer = {
	display: "flex",
	background: "#FE024E",
	justifyContent: "center",
	color: "#fff",
	alignItems: "center",
	position: "absolute",
	bottom: "0",
	width: "100%",
};
