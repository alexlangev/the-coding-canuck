import React from "react";
import styles from "./MatrixPaper.module.css";

function MatrixPaper({ as: Element = "div", children }) {
	return (
		<div className={styles.wrapper}>
			<Element className={styles.sheet}>
				<div className={styles.perforated}>{children}</div>
			</Element>
		</div>
	);
}

export default MatrixPaper;
