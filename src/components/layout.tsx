/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const data: any = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
				}
			}
		}
	`);

	const siteTitle: string = data.site.siteMetadata?.title || `Title`;
	const siteAuthor: string = data.site.siteMetadata?.author || `Author`;

	return (
		<>
			<Header />
			<div className="flex flex-col items-center text-center">
				<main>{children}</main>
				<Footer author={siteAuthor} />
			</div>
		</>
	);
};

export default Layout;
