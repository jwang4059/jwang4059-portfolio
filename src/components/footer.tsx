import React from "react";

interface FooterProps {
	author: string;
}

const Footer = ({ author }: FooterProps) => (
	<footer className="self-center text-base my-4">
		<div className="flex justify-center my-2">
			<a
				href="https://www.linkedin.com/in/jwang4059/"
				target="_blank"
				rel="noreferrer"
			>
				<i className={`devicon-linkedin-plain text-4xl p-2 m-2`} />
			</a>
			<a href="https://github.com/jwang4059" target="_blank" rel="noreferrer">
				<i className={`devicon-github-original text-4xl p-2 m-2`} />
			</a>
		</div>
		<div className="my-2">
			© {new Date().getFullYear()},{` `}
			{author}
		</div>
	</footer>
);

export default Footer;
