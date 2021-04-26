import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Introduction = () => {
	return (
		<article className="prose p-4">
			<h1 className="prose-lg">
				Hi, I'm <span>John</span>.
			</h1>
			<p>
				I'm a web developer and full stack engineer based in the Bay Area. I'm
				passionate about building web applicaitions and writing clean and
				scalable code.
			</p>
			<StaticImage
				className="m-4"
				src="../images/profile/profile.jpg"
				width={300}
				quality={95}
				formats={["auto", "webp", "avif"]}
				alt="My Profile Picture"
			/>
		</article>
	);
};

export default Introduction;
