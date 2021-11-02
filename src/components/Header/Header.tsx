import { NavLink } from "react-router-dom";
import colors from "../../utils/style/colors";
import darkLogo from "../../assets/dark-logo.png";
import lightLogo from "../../assets/light-logo.png";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index";

const style = {
	header: `flex flex-row justify-between py-8`,
	logo: `h-16`,
	nav: `flex items-center`,
	navLink: (isDark = false) =>
		`rounded-full px-4 py-1 flex items-center ${
			isDark ? "text-white" : `text-${colors.secondary}`
		} text-xl hover:bg-${colors.primary} hover:text-white`,
};

export function Header() {
	const { theme } = useContext(ThemeContext);
	const isDark = theme === "dark";
	return (
		<header className={style.header}>
			<img
				src={isDark ? lightLogo : darkLogo}
				alt="Logo Shiny"
				className={style.logo}
			/>
			<nav className={style.nav}>
				<NavLink exact to="/" className={style.navLink(isDark)}>
					Accueil
				</NavLink>
				<NavLink exact to="/survey/1" className={style.navLink(isDark)}>
					Questionnaire
				</NavLink>
				<NavLink exact to="/freelances" className={style.navLink(isDark)}>
					Freelances
				</NavLink>
			</nav>
		</header>
	);
}
