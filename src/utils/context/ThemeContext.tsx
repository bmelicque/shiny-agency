import { createContext, useState } from "react";

type theme = "light" | "dark";

interface themeContextInterface {
	theme: theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<themeContextInterface>(undefined!);

export function ThemeProvider(props: React.PropsWithChildren<{}>) {
	const [theme, setTheme] = useState<theme>("light");

	const toggleTheme = () => {
		setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
