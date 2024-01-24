"use client";
import { useEffect } from "react";
import MainLogo from "../MainLogo";
import styles from "./Header.module.css";
import { Sun, Moon } from "react-feather";
import Link from "next/link";
import Cookie from "js-cookie";
import HWLink from "../HWLink";
import { useState } from "react";
import { DARK_TOKENS, LIGHT_TOKENS } from "@/constants";

function Header({ initialTheme, className, ...delegated }) {
	const [theme, setTheme] = useState(initialTheme);

	useEffect(() => {
		const root = document.documentElement;
		root.setAttribute("data-color-theme", theme);
	}, []);

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
					<MainLogo />
				</div>
				<nav>
					<ul className={styles.navListWrapper}>
						<li className={styles.navListItem}>
							<HWLink href="/projects" isOn={true}>
								Projects
							</HWLink>
						</li>
						<li className={styles.navListItem}>
							<HWLink href="/about" isOn={false}>
								About
							</HWLink>
						</li>
					</ul>
				</nav>
			</div>
			<div>
				<button className={styles.action} onClick={handleToggleTheme}>
					{theme === "light" ? (
						<Sun size="1.5rem" />
					) : (
						<Moon size="1.5rem" />
					)}
				</button>
			</div>
		</div>
	);
}

export default Header;
