import React, { ReactNode, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { MenuIcon } from "@heroicons/react/outline";

interface NavLinkProps {
	classes: string;
	children: ReactNode;
}

const NavLink = ({ classes, children }: NavLinkProps) => (
	<li className={`p-4 text-blue-600 ${classes}`}>{children}</li>
);

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
			<Link to="/">
				<NavLink classes={classes}>Home</NavLink>
			</Link>
			<Link to="/about">
				<NavLink classes={classes}>About</NavLink>
			</Link>
			<Link to="/contact">
				<NavLink classes={classes}>Contact</NavLink>
			</Link>
			<a
				href="https://drive.google.com/file/d/1soK-tqpmOFN5UMyeBQ_zVF6Yymgk7uCO/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				<NavLink classes={classes}>Resume</NavLink>
			</a>
		</ul>
	);
};

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<nav className="fixed min-w-full bg-gray-100 z-10">
				<div className="flex flex-row items-center p-2 ">
					<Link to="/" className="flex-grow text-left p-2 text-blue-600">
						<FontAwesomeIcon icon={faCloud} /> John Wang
					</Link>
					<div className="p-2">
						<button
							className="h-8 w-8 md:hidden"
							onClick={() => setOpen(!open)}
						>
							<MenuIcon />
						</button>
						<div className="hidden md:flex">
							<NavBar />
						</div>
					</div>
				</div>
				{open && <NavBar variant="mobile" />}
			</nav>
		</header>
	);
};

export default Header;
