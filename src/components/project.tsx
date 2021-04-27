import React, { ReactNode } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

import Icon from "./icon";
import Button from "./button";

export interface Data {
	image: {
		src: string;
		alt: string;
	};
	name: string;
	description: string;
	info: string;
	stack?: Array<{ name: string; src: string }>;
	repo: string;
	url?: string;
}

interface ProjectProps {
	data: Data;
	image: FileNode | undefined;
}

const Project = ({ data, image }: ProjectProps) => {
	let renderedImage: ReactNode | null = null;

	if (image) {
		const gatsbyImageData: IGatsbyImageData | undefined = getImage(image);
		if (gatsbyImageData) {
			renderedImage = (
				<GatsbyImage
					className="mb-4"
					image={gatsbyImageData}
					alt={data.image.alt}
				/>
			);
		}
	}

	return (
		<div className="shadow-lg p-4 mx-4 my-8 bg-blue-200">
			{renderedImage}
			<div className="text-left">
				<h2 className="text-2xl font-bold my-2">{data.name}</h2>
				<p className="text-base italic my-1">{data.description}</p>
				<a className="text-base text-blue-600 my-1" href={data.repo}>
					Source Code
				</a>
				<p className="text-base my-4">{data.info}</p>
				<div className="flex flex-row flex-wrap justify-center items-center my-2">
					{data.stack ? data.stack.map((logo) => <Icon logo={logo} />) : null}
				</div>
				{data?.url ? (
					<Button
						classes="min-w-full text-blue-600 border-blue-500 border-2 p-2"
						href={data.url}
					>
						See Live
					</Button>
				) : null}
			</div>
		</div>
	);
};

export default Project;
