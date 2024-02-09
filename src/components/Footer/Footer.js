"use client";
import React from "react";
import styles from "./Footer.module.css";
import MainLogo from "../HWMainLogo";
import PostIt from "../PostIt";
import HWAnchor from "../HWAnchor";
import { RoughNotation } from "react-rough-notation";

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
				<h3 className={styles.header}>
					<RoughNotation
						show={true}
						animate={false}
						type="underline"
						color="black"
						strokeWidth={3}
						padding={-15}
					>
						Where to find me:
					</RoughNotation>
				</h3>

				<ul className={styles.linkList}>
					<li>
						<HWAnchor
							href={"https://www.linkedin.com/in/alexlangev/"}
							internal={false}
						>
							LinkedIn
						</HWAnchor>
					</li>
					<li>
						<HWAnchor
							href={"https://github.com/alexlangev"}
							internal={false}
						>
							Github
						</HWAnchor>
					</li>
					<li>
						<HWAnchor
							href={"https://twitter.com/TheCodingCanuck"}
							internal={false}
						>
							Twitter
						</HWAnchor>
					</li>
				</ul>
			</PostIt>
		</div>
	);
}

export default Footer;
