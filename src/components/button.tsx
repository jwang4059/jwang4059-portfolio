import React, { ReactNode } from "react";

interface ButtonProps {
	classes?: string;
	href?: string;
	children: ReactNode;
}

const Button = ({ classes = "", href = "#", children }: ButtonProps) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<button className={classes}>{children}</button>
		</a>
	);
};

export default Button;
