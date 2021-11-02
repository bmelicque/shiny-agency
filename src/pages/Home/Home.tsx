import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HomeIllustration } from "../../assets/home-illustration.svg";
import colors from "../../utils/style/colors";
import { ThemeContext } from "../../utils/context";

const style = {
	main: (isDark: boolean) =>
		`my-16 ${
			isDark ? `bg-${colors.backgroundLessDark}` : `bg-${colors.backgroundLight}`
		} p-16 flex flex-row items-center`,
	textWrapper: `w-1/2 flex flex-col items-center gap-4`,
	title: `text-5xl font-bold leading-loose`,
	link: (isDark: boolean) =>
		`rounded-full px-4 py-1 flex items-center ${
			isDark ? "text-white" : `text-${colors.secondary}`
		} text-xl hover:bg-${colors.primary} hover:text-white`,
	image: `w-1/2`,
};

export function Home() {
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";
	return (
		<main className={style.main(isDark)}>
			<div className={style.textWrapper}>
				<h1 className={style.title}>
					Repérez vos besoins,
					<br />
					on s'occupe du reste,
					<br />
					avec les meilleurs talents
				</h1>
				<Link to="/survey/1" className={style.link(isDark)}>
					Faire le test
				</Link>
			</div>
			<HomeIllustration className={style.image} />
		</main>
	);
}
