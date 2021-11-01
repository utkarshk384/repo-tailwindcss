module.exports = {
	purge: ["./src/**/*.svelte"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [require("myplugin")],
};
