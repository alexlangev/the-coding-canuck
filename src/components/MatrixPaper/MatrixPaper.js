import React from "react";
import styles from "./MatrixPaper.module.css";

function MatrixPaper({ as: Element = "article", children }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.leftStrip} />
			<Element className={styles.sheet}>{children}</Element>
			<div className={styles.rightStrip} />
		</div>
	);
}

export default MatrixPaper;
