import React, { useState } from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { MenuToggle } from "./menuToggle";
import MobileMenu from "./mobileMenu";
import { resume } from "../mock/data";

const NavLink: React.FC = ({ children }) => {
	return (
		<li className={`inline p-4 text-blue-600 hover:underline`}>{children}</li>
	);
};

const NavBar = () => {
	return (
		<nav>
			<ul>
				<Link to="/">
					<NavLink>Home</NavLink>
				</Link>
				<Link to="/about">
					<NavLink>About</NavLink>
				</Link>
				<Link to="/contact">
					<NavLink>Contact</NavLink>
				</Link>
				<a href={resume} target="_blank" rel="noreferrer">
					<NavLink>Resume</NavLink>
				</a>
			</ul>
		</nav>
	);
};

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed min-w-full z-10 text-left">
			<div className=" bg-gray-100">
				<div className="flex flex-row items-center p-2 ">
					<div className="flex-grow text-left p-2 text-blue-600">
						<Link to="/">
							<i className="fa fa-cloud" /> John Wang
						</Link>
					</div>
					<div className="hidden md:flex">
						<NavBar />
					</div>
					<motion.div
						className="p-2 md:hidden"
						initial={false}
						animate={open ? "open" : "closed"}
					>
						<MenuToggle toggle={() => setOpen(!open)} />
					</motion.div>
				</div>
			</div>
			{<MobileMenu open={open} />}
		</header>
	);
};

export default Header;
