import React, { ReactNode, useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { MenuIcon } from "@heroicons/react/outline";

interface NavLinkProps {
	children: ReactNode;
}

const NavLink = ({ children }: NavLinkProps) => (
	<li className="p-4 hover:bg-blue-600 hover:text-white">{children}</li>
);

const MobileMenu = () => {
	return (
		<ul className="text-left text-blue-600 bg-gray-200">
			<Link to="/">
				<NavLink>Home</NavLink>
			</Link>
			<Link to="/about">
				<NavLink>About</NavLink>
			</Link>
			<Link to="/contact">
				<NavLink>Contact</NavLink>
			</Link>
			<a href="/resume" target="_blank" rel="noreferrer">
				<NavLink>Resume</NavLink>
			</a>
		</ul>
	);
};

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="self-stretch">
			<nav className="fixed min-w-full  bg-gray-100 z-10">
				<div className="flex flex-row items-center p-2 ">
					<div className="flex-grow text-left p-2 text-blue-600">
						<FontAwesomeIcon icon={faCloud} /> John Wang
					</div>
					<div className="text-right p-2">
						<button className="h-8 w-8" onClick={() => setOpen(!open)}>
							<MenuIcon />
						</button>
					</div>
				</div>
				{open && <MobileMenu />}
			</nav>
		</header>
	);
};

export default Header;
