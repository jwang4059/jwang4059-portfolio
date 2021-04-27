import React from "react";
import { Link } from "gatsby";

const Contact = () => {
	return (
		<section>
			<article>
				<div className="my-4">
					<h2 className="text-xl font-bold m-4">Let's Connect</h2>
					<p className="text-lg m-4">
						If you'd like to get in touch with me about a project,
						collaboration, or just to say hello, send me a message!
					</p>
				</div>
				<Link to="/contact">
					<div className="bg-blue-600 text-white rounded-md p-2 m-4">
						<button>Contact Me</button>
					</div>
				</Link>
			</article>
		</section>
	);
};

export default Contact;
