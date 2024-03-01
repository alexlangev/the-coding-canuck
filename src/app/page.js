import VisuallyHidden from "@/components/VisuallyHidden";
import styles from "./page.module.css";
import { getLatestContent } from "@/utils/content-helpers";
import PostSummary from "@/components/PostSummary";

export default async function Home() {
    const content = await getLatestContent();

    return (
        <div className={styles.wrapper}>
            <VisuallyHidden>
                <h1>The Coding Canuck</h1>
            </VisuallyHidden>
            <div>
                <div className={styles.heroWrapper}>
                    <div className={styles.greetWrapper}>
                        <p className={styles.greet}>What{"'"}s up</p>
                        <p className={styles.greet}>Internet!</p>
                    </div>
                    <p className={styles.text}>
                        This website will eventually become a professional
                        portfolio. For the moment it is a place for me to save
                        and consume my cheat sheets and dot files.
                    </p>
                </div>
                <h2 className={styles.subTitle}>Cheat sheets:</h2>
                <div className={styles.postsWrapper}>
                    {content.map(({ title, ...delegated }) => (
                        <PostSummary key={title} title={title} {...delegated} />
                    ))}
                </div>
            </div>
        </div>
    );
}
