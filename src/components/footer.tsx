import React from "react";

interface FooterProps {
	author: string;
}

const Footer = ({ author }: FooterProps) => (
	<footer className="prose mt-8">
		© {new Date().getFullYear()},{` `}
		{author}
	</footer>
);

export default Footer;
