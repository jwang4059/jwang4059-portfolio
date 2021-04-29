import React from "react";

const ContactForm = () => {
	return (
		<div className="flex flex-col w-3/4 max-w-2xl">
			<h1 className="text-2xl font-bold">Let's Work Together</h1>
			<p className="my-4">
				Thank you for visiting and scrolling through my portfolio. If you want
				to talk about any of my projects, or just chat, I'd love to hear from
				you!
			</p>
			<form
				className="flex flex-col items-stretch"
				name="contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
				data-netlify-recaptcha="true"
			>
				<input type="hidden" name="form-name" value="contact" />
				<input
					className="p-4 my-2"
					id="name"
					type="text"
					name="name"
					placeholder="Your Name"
					required
				/>
				<input
					className="p-4 my-2"
					id="email"
					type="email"
					name="email"
					placeholder="Your Email"
					required
				/>
				<textarea
					className="p-4 my-2"
					id="message"
					name="message"
					placeholder="Your Message"
					required
				/>
				<div data-netlify-recaptcha="true"></div>
				<button
					className="self-center block bg-blue-600 text-white font-bold w-24 px-4 py-2 my-8"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
