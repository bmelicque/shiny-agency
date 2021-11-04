import React, { useContext } from "react";
import DefaultPicture from "../../assets/profile.png";
import colors from "../../utils/style/colors";
import { ThemeContext } from "../../utils/context";
import { useState } from "react";

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
	const [isFavorite, setIsFavorite] = useState(false);
	const star = isFavorite ? "⭐️" : "";

	return (
		<div
			className={style.card(isDark)}
			onClick={() => setIsFavorite(!isFavorite)}
		>
			<h2 className={style.label(isDark)}>
				{label} {star}
			</h2>
			<img src={picture} alt="freelance" className={style.image} />
			<p>{title}</p>
		</div>
	);
}
