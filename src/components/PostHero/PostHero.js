import React from "react";
import { format } from "date-fns";
import clsx from "clsx";

import styles from "./PostHero.module.css";

export default function PostHero({
	title,
	publishedOn,
	className,
	...delegated
}) {
	const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

	return (
		<header className={clsx(styles.wrapper, className)} {...delegated}>
			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>
				<p>
					Published on{" "}
					<time dateTime={publishedOn}>{humanizedDate}</time>
				</p>
			</div>
		</header>
	);
}
