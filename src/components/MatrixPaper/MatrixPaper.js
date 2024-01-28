"use client";
import React from "react";
import styles from "./MatrixPaper.module.css";
import { motion } from "framer-motion";

function MatrixPaper({ as: Element = "article", children }) {
	return (
		<motion.div
			initial={{ y: "+100vw" }}
			animate={{ y: 0 }}
			transition={{ duration: 1 }}
		>
			<div className={styles.wrapper}>
				<Element className={styles.sheet}>
					<div className={styles.perforated}>{children}</div>
				</Element>
			</div>
		</motion.div>
	);
}

export default MatrixPaper;
