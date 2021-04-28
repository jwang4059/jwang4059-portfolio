import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ArrowNarrowDownIcon } from "@heroicons/react/solid";

const Hero = () => {
	return (
		<article>
			<div className="min-h-screen max-w-6xl p-4 md:flex md:justify-center md:items-center md:mx-12">
				<div className="flex flex-col justify-center text-left mb-4 md:mr-12">
					<h1 className="text-4xl font-bold">
						Hi, I'm <span>John</span>.
					</h1>
					<p className="text-xl my-4">
						I'm a web developer and full stack engineer based in the Bay Area.
						I'm passionate about building web applicaitions and writing clean
						and scalable code.
					</p>
					<a className="inline-block" href="#projects">
						<div className="flex items-center text-lg text-blue-600 my-4">
							<span className="mr-2">Scroll to see projects</span>
							<ArrowNarrowDownIcon className="inline h-5 w-5 " />
						</div>
					</a>
				</div>
				<StaticImage
					className="rounded-md shadow-md md:flex-shrink-0"
					src="../images/profile/profile-original.jpg"
					width={350}
					quality={95}
					formats={["auto", "webp", "avif"]}
					alt="My Profile Picture"
				/>
			</div>
		</article>
	);
};

export default Hero;
