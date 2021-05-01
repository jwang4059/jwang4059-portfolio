import React from "react";
import { motion } from "framer-motion";

const Button = ({ classes = "", href = "#", children }) => {
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
