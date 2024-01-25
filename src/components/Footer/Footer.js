"use client";
import React from "react";
import styles from "./Footer.module.css";
import MainLogo from "../HWMainLogo";
import PostIt from "../PostIt";
import Link from "next/link";

function Footer() {
	let dataColorTheme = null;
	if (typeof document !== "undefined") {
		const root = document.documentElement;
		dataColorTheme = root.getAttribute("data-color-theme");
	}

	return (
		<div className={styles.wrapper}>
			<MainLogo />
			<PostIt>
				<h3 className={styles.header}>Where to find me:</h3>

				<ul className={styles.linkList}>
					<li>
						<Link
							href={"https://www.linkedin.com/in/alexlangev/"}
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</Link>
					</li>
					<li>
						<Link
							href={"https://github.com/alexlangev"}
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</Link>
					</li>
					<li>
						<Link
							href={"https://twitter.com/TheCodingCanuck"}
							target="_blank"
							rel="noopener noreferrer"
						>
							Twitter
						</Link>
					</li>
				</ul>
			</PostIt>
		</div>
	);
}

export default Footer;
