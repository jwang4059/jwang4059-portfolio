import React, { ReactNode } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export interface Data {
	image: {
		src: string;
		alt: string;
	};
	name: string;
	description: string;
	info: string;
	resources?: Array<string>;
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
		const gatsbyImageData = getImage(image);
		if (gatsbyImageData) {
			renderedImage = (
				<GatsbyImage image={gatsbyImageData} alt={data.image.alt} />
			);
		}
	}

	return (
		<div className="prose shadow-lg p-2 m-2">
			{renderedImage}
			<h2 className="prose-lg">{data.name}</h2>
			<p>{data.description}</p>
			<p>{data.info}</p>
			<a href={data.repo}>
				<button>Source Code</button>
			</a>
			<a href={data.url}>
				<button>Live Demo</button>
			</a>
		</div>
	);
};

export default Project;
