import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav className={`flex items-center`}>
				<NavLink exact to="/">
					Accueil
				</NavLink>
				<NavLink exact to="/survey/1">
					Questionnaire
				</NavLink>
				<NavLink exact to="/freelances">
					Freelances
				</NavLink>
			</nav>
        </header>
    );
}
