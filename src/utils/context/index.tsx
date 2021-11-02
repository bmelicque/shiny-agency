import { createContext, useState } from "react";

type theme = "light" | "dark";

type props = {
	children: React.ReactNode;
};

interface contextInterface {
	theme: theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<contextInterface>({theme: "light", toggleTheme: ()=>{}});

export function ThemeProvider(props: props) {
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
