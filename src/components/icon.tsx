import React from "react";

interface IconProps {
	logo: {
		name: string;
		src: string;
	};
}

const Icon = ({ logo }: IconProps) => {
	return (
		<div className="flex flex-col justify-center items-center w-20 h-20 p-1 m-1">
			<i className={`${logo.src} text-4xl`} />
			<span className="text-xs">{logo.name}</span>
		</div>
	);
};

export default Icon;
