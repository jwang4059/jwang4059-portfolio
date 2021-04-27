import React, { ReactNode } from "react";
import Project, { Data } from "./project";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

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
		<section id="projects">
			<h1 className="text-4xl font-bold">Projects</h1>
			{renderedProjects}
		</section>
	);
};

export default ProjectContainer;
