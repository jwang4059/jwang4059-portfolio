import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { resume } from "../mock/data";

const MenuVariants = {
	closed: {
		display: "none",
		transition: {
			when: "afterChildren",
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	open: {
		display: "block",
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
};

const MenuItemVariants = {
	closed: {
		y: "-1rem",
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
};

const MenuItem: React.FC = ({ children }) => (
	<motion.li
		className="p-4 bg-gray-100 hover:bg-blue-600 hover:text-white"
		variants={MenuItemVariants}
	>
		{children}
	</motion.li>
);

const MobileMenu: React.FC<{ open: Boolean }> = ({ open }) => {
	return (
		<nav>
			<motion.ul
				className="md:hidden"
				variants={MenuVariants}
				initial={false}
				animate={open ? "open" : "closed"}
			>
				<Link to="/">
					<MenuItem>Home</MenuItem>
				</Link>
				<Link to="/about">
					<MenuItem>About</MenuItem>
				</Link>
				<Link to="/contact">
					<MenuItem>Contact</MenuItem>
				</Link>
				<a href={resume} target="_blank" rel="noreferrer">
					<MenuItem>Resume</MenuItem>
				</a>
			</motion.ul>
		</nav>
	);
};

export default MobileMenu;
