import React from "react";

interface IconProps {
	logo: string;
	children: string;
}

const Icon: React.FC<IconProps> = ({ logo, children }) => {
	return (
		<div className="flex flex-col justify-center items-center w-20 h-20 p-1 m-1">
			<i className={`${logo} text-4xl`} />
			<span className="text-xs">{children}</span>
		</div>
	);
};

export default Icon;
