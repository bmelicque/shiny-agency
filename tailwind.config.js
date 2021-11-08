module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Comfortaa', '"Trebuchet MS"', "Helvetica", "sans-serif"],
		},

		extend: {
			colors: {
				darkest: '#2f2e41',
				dark: '#4f4c6b',
				lightblue: '#fafafc',
				primary: '#5843d3',
				grey: '#8186a0',
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
