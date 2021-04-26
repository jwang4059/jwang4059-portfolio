import React, { ReactNode } from "react";
import Project, { Data } from "./project";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

interface ProjectsProps {
	projectData: Array<Data>;
	projectImages: Array<FileNode>;
}

const Projects = ({ projectData, projectImages }: ProjectsProps) => {
	const getFileNode = (data: Data) => {
		return projectImages.find((node) => node.base === data.image.src);
	};
	const renderedProjects: ReactNode = projectData.map((data: Data) => (
		<Project data={data} image={getFileNode(data)} />
	));

	return <section>{renderedProjects}</section>;
};

export default Projects;
