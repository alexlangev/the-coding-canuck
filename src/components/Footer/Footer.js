import React from "react";
import styles from "./Footer.module.css";
import MainLogo from "../MainLogo";
function Footer() {
	return (
		<>
			<div className={styles.wrapper}>
				<MainLogo />
				<div>post it</div>
			</div>
		</>
	);
}

export default Footer;
