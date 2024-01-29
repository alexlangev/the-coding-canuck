import { format } from "date-fns";

import styles from "./FlashCard.module.css";

export default function FlashCard({ slug, title, publishedOn, abstract }) {
	const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");
	const href = `/${slug}`;
	return (
		<div className={styles.wrapper}>
			<div className={styles.decoratingRedLine} />
			<div className={styles.decoratingBlueLines} />
			<div className={styles.content}>
				<div className={styles.cardHeader}>
					<p>{title}</p>
					<time dateTime={publishedOn}>{humanizedDate}</time>
				</div>
				<div className={styles.cardBody}>
					<p>{abstract}</p>
				</div>
				<div className={styles.cardFooter}>
					<a href={href}>Read On...</a>
				</div>
			</div>
		</div>
	);
}
