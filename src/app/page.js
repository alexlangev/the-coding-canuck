import VisuallyHidden from "@/components/VisuallyHidden";
import MatrixPaper from "@/components/MatrixPaper";
import styles from "./page.module.css";
import { getLatestContent } from "@/utils/content-helpers";

export default async function Home() {
	const content = await getLatestContent();

	return (
		<div className={styles.wrapper}>
			<VisuallyHidden>
				<h1>The Coding Canuck</h1>
			</VisuallyHidden>
			<MatrixPaper as="div">
				<h2>Latest content</h2>
				{content.map(({ slug, ...delegated }) => (
					<div key={slug} slug={slug} {...delegated}>
						{slug}
					</div>
				))}
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32
				</p>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32
				</p>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32
				</p>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32
				</p>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32
				</p>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin literature
					from 45 BC, making it over 2000 years old. Richard
					McClintock, a Latin professor at Hampden-Sydney College in
					Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through
					the cites of the word in classical literature, discovered
					the undoubtable source. Lorem Ipsum comes from sections
					1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
					Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
					during the Renaissance. The first line of Lorem Ipsum,
					"Lorem ipsum dolor sit amet..", comes from a line in section
					1.10.32
				</p>
			</MatrixPaper>
		</div>
	);
}
