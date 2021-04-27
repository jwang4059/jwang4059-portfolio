import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Header = () => (
	<header className="flex flex-row self-stretch items-center p-2">
		<div className="flex-grow text-left p-2 text-blue-600">
			<span>John</span>
			<span>Wang</span>
		</div>
		<div className="text-right p-2">
			<MenuIcon className="h-8 w-8" />
		</div>
	</header>
);

export default Header;
