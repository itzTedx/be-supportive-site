import localFont from "next/font/local";

export const neueMontreal = localFont({
	variable: "--font-sans",
	display: "swap",
	preload: true,
	src: [
		{ weight: "400", path: "./PPNeueMontreal-Regular.woff" },
		{ weight: "500", path: "./NeueMontreal-Medium.otf" },
	],
	fallback: [
		"-apple-system",
		"BlinkMacSystemFont",
		"Segoe UI",
		"Roboto",
		"Oxygen",
		"Ubuntu",
		"Cantarell",
		"Helvetica Neue",
		"Arial",
		"sans-serif",
	],
});

export const seasonMix = localFont({
	variable: "--font-display",
	display: "swap",
	preload: true,
	src: "./SeasonMix-Regular.woff",
	fallback: [
		"-apple-system",
		"BlinkMacSystemFont",
		"Segoe UI",
		"Roboto",
		"Oxygen",
		"Ubuntu",
		"Cantarell",
		"Helvetica Neue",
		"Arial",
		"sans-serif",
	],
});
