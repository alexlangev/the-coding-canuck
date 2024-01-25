"use client";
import { format } from "date-fns";
import styles from "./FlashCard.module.css";

export default function FlashCard({ slug, title, publishedOn, abstract }) {
	const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");
	const href = `/${slug}`;
	return (
		<div className={styles.wrapper}>
			<div className={styles.decoratingWrapper}>
				<article className={styles.content}>
					<p>{title}</p>
					<time dateTime={publishedOn}>{humanizedDate}</time>
					<p>{abstract}</p>
					<a href={href}>Read On...</a>
				</article>
			</div>
		</div>
	);
}
