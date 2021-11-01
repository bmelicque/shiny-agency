import React from "react";
import DefaultPicture from "../../assets/profile.png";
import colors from "../../utils/style/colors";

interface CardProps {
	label: string;
	title: string;
	picture?: string;
}

export function Card({ label, title, picture = DefaultPicture }: CardProps) {
	return (
		<div
			className={`flex flex-col items-center gap-4 w-80 p-4 bg-${colors.backgroundLight} rounded-lg hover:shadow-md transition cursor-pointer`}
		>
			<span className={`text-${colors.primary} text-xl font-bold`}>
				{label}
			</span>
			<img src={picture} alt="freelance" className="h-20 w-20 rounded-full" />
			<span>{title}</span>
		</div>
	);
}
