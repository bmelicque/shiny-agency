import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const style = {
	footer: `flex items-center justify-center py-16`,
	button: (isDark: boolean) =>
		`bg-transparent ${isDark ? "text-white" : "text-grey"}`,
};

export function Footer() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<footer className={style.footer}>
			<button className={style.button(theme === "dark")} onClick={toggleTheme}>
				{theme === "dark" ? "Passer au mode clair ☀️" : "Passer au mode sombre 🌙"}
			</button>
		</footer>
	);
}
