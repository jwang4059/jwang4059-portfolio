import React from "react";
import { graphql, PageProps } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Introduction from "../components/introduction";
import Projects from "../components/projects";
import { projectsData } from "../mock/data";

interface allFile {
	edges: Array<{ node: FileNode }>;
}

interface IndexQueryProps {
	allFile: allFile;
}

type IndexPageProps = PageProps<IndexQueryProps>;

const IndexPage = (props: IndexPageProps) => {
	const files = props.data.allFile.edges;
	const images = files.map(({ node }) => node);
	console.log(images);

	return (
		<Layout>
			<Seo title="Home" />
			<Introduction />
			<Projects projectData={projectsData} projectImages={images} />
			{/*
			<Contact/>
    	*/}
		</Layout>
	);
};

export const IndexQuery = graphql`
	query IndexQuery {
		allFile(filter: { relativeDirectory: { eq: "projects" } }) {
			edges {
				node {
					id
					base
					childImageSharp {
						id
						gatsbyImageData(
							width: 300
							quality: 95
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
		}
	}
`;

export default IndexPage;
