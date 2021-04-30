import React, { ReactNode } from "react";
import { Link } from "gatsby";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./menuToggle";

interface NavLinkProps {
	classes: string;
	component: "link" | "a";
	href: string;
	children: ReactNode;
}

const NavLink = ({ classes, component, href, children }: NavLinkProps) => {
	const content = (
		<li className={`p-4 text-blue-600 ${classes}`}>{children}</li>
	);
	const renderedLink =
		component === "link" ? (
			<Link to={href}>{content}</Link>
		) : (
			<a href={href} target="_blank" rel="noreferrer">
				{content}
			</a>
		);

	return renderedLink;
};

interface NavBarProps {
	variant?: "mobile" | "desktop";
}

const NavBar = ({ variant = "desktop" }: NavBarProps) => {
	const classes: string =
		variant === "desktop"
			? "inline hover:underline"
			: "bg-gray-200 hover:bg-blue-600 hover:text-white";

	return (
		<ul className="text-left">
			<NavLink classes={classes} component="link" href="/">
				Home
			</NavLink>
			<NavLink classes={classes} component="link" href="/about">
				About
			</NavLink>
			<NavLink classes={classes} component="link" href="/contact">
				Contact
			</NavLink>
			<NavLink
				classes={classes}
				component="a"
				href="https://drive.google.com/file/d/1soK-tqpmOFN5UMyeBQ_zVF6Yymgk7uCO/view?usp=sharing"
			>
				Resume
			</NavLink>
		</ul>
	);
};

const Header = () => {
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<header>
			<nav className="fixed min-w-full bg-gray-100 z-10">
				<div className="flex flex-row items-center p-2 ">
					<Link to="/" className="flex-grow text-left p-2 text-blue-600">
						<i className="fa fa-cloud" /> John Wang
					</Link>
					<div className="hidden md:flex">
						<NavBar />
					</div>
					<motion.div
						className=" md:hidden"
						initial={false}
						animate={isOpen ? "open" : "closed"}
					>
						<MenuToggle toggle={() => toggleOpen()} />
					</motion.div>
				</div>
				{isOpen && <NavBar variant="mobile" />}
			</nav>
		</header>
	);
};

export default Header;
