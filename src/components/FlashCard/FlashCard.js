import { format } from "date-fns";
import Polaroid from "../Polaroid";
import styles from "./FlashCard.module.css";
import HWAnchor from "../HWAnchor";

export default function FlashCard({
	slug,
	title,
	publishedOn,
	abstract,
	imgSrc,
}) {
	const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");
	const href = `/${slug}`;
	// random int between -4 and 4
	const rotation = Math.floor(Math.random() * 9) - 4;
	return (
		<div className={styles.wrapper}>
			<div className={styles.decoratingRedLine} />
			<div className={styles.decoratingBlueLines} />
			<div className={styles.content}>
				<div className={styles.cardHeader}>
					<h3 className={styles.title}>{title}</h3>
					<time dateTime={publishedOn}>{humanizedDate}</time>
				</div>
				<div className={styles.cardBody}>
					<p className={styles.cardAbstract}>{abstract}</p>
					{imgSrc && (
						<Polaroid
							style={{ rotate: `${rotation}deg` }}
							src={imgSrc}
							// width={180}
							height={180}
						/>
					)}
				</div>

				<div className={styles.cardFooter}>
					<HWAnchor href={href} internal={true}>
						Read On...
					</HWAnchor>
				</div>
			</div>
		</div>
	);
}
