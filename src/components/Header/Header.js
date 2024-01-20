import React from "react";
import MainLogo from "../MainLogo";
import styles from "./Header.module.css";
import { Sun, Moon } from "react-feather";
import Link from "next/link";

function Header() {
	return (
		<div className={styles.wrapper}>
			<div>
				<MainLogo />
			</div>
			<nav>
				<ul className={styles.navWrapper}>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
			</nav>
			<div>
				<Sun size="1.5rem" />
				<Moon size="1.5rem" />
			</div>
		</div>
	);
}

export default Header;
