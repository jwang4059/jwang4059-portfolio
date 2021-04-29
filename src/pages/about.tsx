import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
	return (
		<Layout>
			<Seo title="About" />
			<article>
				<section className="flex flex-col items-center max-w-6xl lg:flex-row">
					<StaticImage
						className="rounded-md shadow-md md:flex-shrink-0"
						src="../images/profile/aboutProfile.jpg"
						width={350}
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="My Profile Picture"
					/>
					<div className="text-lg text-left mt-8 md:ml-8">
						<h1 className="text-2xl font-bold mb-4">
							Hi. I'm John, a full stack developer based in the Castro Valley,
							CA.
						</h1>
						<p className="my-4">
							Growing up, I was never sure about who I wanted to be or what I
							wanted to do. I would just go with the flow and go wherever life
							would take me. I spent a lot of time just enjoying the present and
							never really thought about my future.
						</p>
						<p className="my-4">
							As an undergraduate of the University of California, Irvine, I
							spent years learning general computer science knowledge such as
							data structures, algorithms, and software design. I’ve joined
							clubs for different things like volunteering, dragon boat, and
							video game design. I’ve continuously tried to figure out who and
							what I wanted to be, and it wasn’t until my last year in college
							that I realized I was interested in web development and wanted to
							pursue a career in this industry.
						</p>
						<p className="my-4">
							After I graduated in Summer of 2020, I decided it was time for me
							to take charge of my own life and signed up for an online web
							development course to learn more about this field and to sharpen
							my skills. There I was fascinated by how the Internet worked and
							how websites are rendered on our computers and smart phones. My
							mind was blown when I realized how much there is to learn in web
							development. You can literally build anything with the endless
							number of resources and APIs out there. What was once an interest
							has developed into a passion for web development and my desire to
							work as a web developer or full stack engineer.
						</p>
						<p className="my-4">
							Now, I’m passionate about building responsive, full stack web
							applications that can solve real world problems. Whether it’s the
							frontend or backend, I enjoy optimizing and writing clean,
							reusable code. I love learning about new technologies and
							frameworks and applying that knowledge to the projects I am
							working on. With how big the web development ecosystem has become,
							I intend on learning as much as I can so that I can continue
							improving my skills, expanding my knowledge, and building
							meaningful projects that will give users a good experience.
						</p>
						<p className="my-4">
							When I’m not working on personal projects, you can find me working
							out, learning Japanese, and spending time with friends and family.
						</p>
						<a href="https://drive.google.com/file/d/1soK-tqpmOFN5UMyeBQ_zVF6Yymgk7uCO/view?usp=sharing">
							<button className="text-blue-600 border-blue-600 border-2 px-4 py-2">
								View My Resume
							</button>
						</a>
					</div>
				</section>
			</article>
		</Layout>
	);
};

export default About;
