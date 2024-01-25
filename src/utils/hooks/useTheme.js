import { useEffect, useState } from "react";

function useTheme() {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const root = document.documentElement;
		setTheme(root.getAttribute("data-color-theme"));
	});

	return theme;
}

export { useTheme };
