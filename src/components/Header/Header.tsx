import { NavLink } from "react-router-dom";
import colors from "../../utils/style/colors";
import logo from "../../assets/dark-logo.png";

export function Header() {
    const navStyle = `rounded-full px-4 py-1 flex items-center text-${colors.secondary} text-xl hover:bg-${colors.primary} hover:text-white`;

	return (
		<header className={`flex flex-row justify-between my-8`}>
			<img src={logo} alt="Logo Shiny" className="h-16" />
			<nav className={`flex items-center`}>
				<NavLink exact to="/" className={navStyle}>
					Accueil
				</NavLink>
				<NavLink exact to="/survey/1" className={navStyle}>
					Questionnaire
				</NavLink>
				<NavLink exact to="/freelances" className={navStyle}>
					Freelances
				</NavLink>
			</nav>
		</header>
	);
}
