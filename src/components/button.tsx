import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
	classes?: string;
	href?: string;
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	classes = "",
	href = "#",
	children,
}) => {
	return (
		<a href={href} target="_blank" rel="noreferrer">
			<motion.button
				className={classes}
				whileHover={{ color: "white", backgroundColor: "#2563EB" }}
			>
				{children}
			</motion.button>
		</a>
	);
};

export default Button;
