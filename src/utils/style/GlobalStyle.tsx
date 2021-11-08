import { useContext } from "react";
import { ThemeContext } from "../context";
import colors from "./colors";

const style = {
	body: (isDark = false) =>
		`min-h-screen w-screen ${
			isDark ? `bg-${colors.backgroundDark} text-white` : "bg-white text-black"
		}`,
	container: `max-w-screen-xl mx-auto font-serif font-bold`,
};

function GlobalStyle({ children }: { children: React.ReactNode }) {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={style.body(theme === "dark")}>
			<div className={style.container}>{children}</div>
		</div>
	);
}

export default GlobalStyle;
