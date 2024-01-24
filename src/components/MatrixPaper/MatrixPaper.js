import React from "react";
import styles from "./MatrixPaper.module.css";

function MatrixPaper({ as: Element = "article", children }) {
	return (
		<div className={styles.wrapper}>
			<Element className={styles.sheet}>{children}</Element>
		</div>
	);
}

export default MatrixPaper;
