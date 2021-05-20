import React from "react";
import { graphql, PageProps } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import ProjectContainer from "../components/projectContainer";
import Contact from "../components/contact";
import { projectsData } from "../mock/data";

interface IndexQueryProps {
	allFile: {
		edges: Array<{ node: FileNode }>;
	};
}

const IndexPage: React.FC<PageProps<IndexQueryProps>> = (props) => {
	const files = props.data.allFile.edges;
	const images = files.map(({ node }) => node);

	return (
		<Layout>
			<Seo title="Home" />
			<Hero />
			<ProjectContainer projectData={projectsData} projectImages={images} />
			<Contact />
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
						gatsbyImageData(quality: 95, formats: [AUTO, WEBP, AVIF])
					}
				}
			}
		}
	}
`;

export default IndexPage;
