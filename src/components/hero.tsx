import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
	return (
		<article className="p-4">
			<section className="text-left">
				<h1 className="text-4xl font-bold">
					Hi, I'm <span>John</span>.
				</h1>
				<p className="text-xl my-4">
					I'm a web developer and full stack engineer based in the Bay Area. I'm
					passionate about building web applicaitions and writing clean and
					scalable code.
				</p>
			</section>
			<StaticImage
				className="rounded-md shadow-md"
				src="../images/profile/profile-original.jpg"
				quality={95}
				formats={["auto", "webp", "avif"]}
				alt="My Profile Picture"
			/>
		</article>
	);
};

export default Hero;
