import VisuallyHidden from "@/components/VisuallyHidden";
import FlashCard from "@/components/FlashCard";
import styles from "./page.module.css";
import { getLatestContent } from "@/utils/content-helpers";

export default async function Home() {
	const content = await getLatestContent();

	return (
		<div className={styles.wrapper}>
			<VisuallyHidden>
				<h1>The Coding Canuck</h1>
			</VisuallyHidden>
			<div>
				<h2>Latest content</h2>
				{content.map(({ slug, ...delegated }) => (
					<FlashCard key={slug} slug={slug} {...delegated} />
				))}
			</div>
		</div>
	);
}
