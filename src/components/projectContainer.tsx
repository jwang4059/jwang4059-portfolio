import React, { ReactNode } from "react";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import Project, { Data } from "./project";

interface ProjectContainerProps {
	projectData: Array<Data>;
	projectImages: Array<FileNode>;
}

const ProjectContainer = ({
	projectData,
	projectImages,
}: ProjectContainerProps) => {
	const getFileNode = (data: Data) => {
		return projectImages.find((node) => node.base === data.image.src);
	};

	const renderedProjects: ReactNode = projectData.map((data: Data) => (
		<Project key={data.repo} data={data} image={getFileNode(data)} />
	));

	return (
		<article id="projects" className="self-stretch pt-24 pb-12">
			<h2 className="text-4xl font-bold">Projects</h2>
			{renderedProjects}
		</article>
	);
};

export default ProjectContainer;
