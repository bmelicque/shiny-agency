import React, { useContext } from "react";
import DefaultPicture from "../../assets/profile.png";
import colors from "../../utils/style/colors";
import { ThemeContext } from "../../utils/context/index";

interface CardProps {
	label: string;
	title: string;
	picture?: string;
}

const style = {
	card: (isDark: boolean) =>
		`flex flex-col items-center gap-4 w-80 p-4 ${
			isDark
				? `bg-${colors.backgroundLessDark}`
				: `bg-${colors.backgroundLight}`
		} rounded-lg hover:shadow-md transition-shadow cursor-pointer`,
	label: (isDark: boolean) =>
		`${
			isDark ? `text-${colors.backgroundLight}` : `text-${colors.primary}`
		} text-xl font-bold`,
	image: `h-20 w-20 rounded-full`,
};

export function Card({ label, title, picture = DefaultPicture }: CardProps) {
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";

	return (
		<div className={style.card(isDark)}>
			<span className={style.label(isDark)}>{label}</span>
			<img src={picture} alt="freelance" className={style.image} />
			<span>{title}</span>
		</div>
	);
}
