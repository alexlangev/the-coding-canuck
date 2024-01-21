import React from "react";
import styles from "./Footer.module.css";
import MainLogo from "../MainLogo";
import PostIt from "../PostIt";

function Footer() {
	let dataColorTheme = null;
	if (typeof document !== "undefined") {
		const root = document.documentElement;
		dataColorTheme = root.getAttribute("data-color-theme");
	}

	return (
		<div className={styles.wrapper}>
			<MainLogo />
			<PostIt>post it</PostIt>
		</div>
	);
}

export default Footer;
