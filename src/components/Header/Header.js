"use client";
import { useEffect, useState } from "react";
import HWMainLogo from "@/components/HWMainLogo";
// import HWNavLink from "@/components/HWNavLink";
import styles from "./Header.module.css";
import HWIcon from "@/components/HWIcon";

import Cookie from "js-cookie";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

export default function Header({ initialTheme, className, ...delegated }) {
	const [theme, setTheme] = useState(initialTheme);

	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute("data-color-theme", theme);
	}, []); // eslint-disable-line

	function handleToggleTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		Cookie.set("theme", newTheme, {
			expires: 1000,
		});
		const newTokens = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
		const root = document.documentElement;
		root.setAttribute("data-color-theme", newTheme);
		Object.entries(newTokens).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.leftSideWrapper}>
				<div>
					<HWMainLogo />
				</div>
				<nav>
					<ul className={styles.navListWrapper}>
						{/* <li className={styles.navListItem}>
							<HWNavLink href="/projects" isOn={true}>
								Projects
							</HWNavLink>
						</li> */}
						{/* <li className={styles.navListItem}>
							<HWNavLink href="/about" isOn={false}>
								About
							</HWNavLink>
						</li> */}
					</ul>
				</nav>
			</div>
			<div>
				<button className={styles.action} onClick={handleToggleTheme}>
					{theme === "light" ? (
						<HWIcon icon="Sun" size="2rem" />
					) : (
						<HWIcon icon="Moon" size="2rem" />
					)}
				</button>
			</div>
		</div>
	);
}
