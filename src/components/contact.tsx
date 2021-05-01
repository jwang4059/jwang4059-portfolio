import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.article
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<section className="max-w-xl">
				<div className="my-4">
					<h2 className="text-xl font-bold m-4">Let's Connect</h2>
					<p className="text-lg m-4">
						If you'd like to get in touch with me about a project,
						collaboration, or just to say hello, send me a message!
					</p>
				</div>
				<Link to="/contact">
					<motion.button
						className="bg-blue-600 text-white px-4 py-2 m-4"
						whileHover={{ scale: 1.2 }}
						transition={{ duration: 0.4 }}
					>
						Contact Me
					</motion.button>
				</Link>
			</section>
		</motion.article>
	);
};

export default Contact;
