import { useContext } from "react";
import DefaultPicture from "../../assets/profile.png";
import { ThemeContext } from "../../utils/context";
import { Link } from "react-router-dom";

interface CardProps {
	freelanceId: string;
	label: string;
	title: string;
	picture: string;
}

const style = {
	card: (isDark: boolean) =>
		`flex flex-col items-center gap-4 w-80 p-4 ${
			isDark ? `bg-dark` : `bg-lightblue`
		} rounded-lg hover:shadow-md transition-shadow cursor-pointer`,
	label: (isDark: boolean) =>
		`${
			isDark ? "text-white" : "text-primary"
		} text-xl font-bold`,
	image: `h-20 w-20 rounded-full`,
};

export function Card(props: CardProps) {
	const { label, title, freelanceId, picture = DefaultPicture } = props;

	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";

	return (
		<Link to={`./profile/${freelanceId}`} className={style.card(isDark)}>
			<h2 className={style.label(isDark)}>{label}</h2>
			<img src={picture} alt="freelance" className={style.image} />
			<p>{title}</p>
		</Link>
	);
}
