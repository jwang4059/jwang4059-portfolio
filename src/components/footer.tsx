import React from "react";

interface FooterProps {
	author: string;
}

const Footer = ({ author }: FooterProps) => (
	<footer className="text-base my-4">
		© {new Date().getFullYear()},{` `}
		{author}
	</footer>
);

export default Footer;
