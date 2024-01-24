"use client";
import { format } from "date-fns";
import styles from "./FlashCard.module.css";

export default function FlashCard({ slug, title, publishedOn, abstract }) {
	const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");
	const href = `/${slug}`;
	return (
		<article className={styles.wrapper}>
			<p>{title}</p>
			<time dateTime={publishedOn}>{humanizedDate}</time>
			<p>{abstract}</p>
			<a href={href}>Read On...</a>
		</article>
	);
}
