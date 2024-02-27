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
                <p>
                    What{"'"}s up internet! My name is Alex Langevin, also know
                    many places online as The Coding Canuck. I am a Full-Stack
                    web2 and web3 developper. I{"'"}m also a cybersecurity and
                    cryptography enthousiast.
                </p>
                <p>
                    This might become a full-fledge blog one day but for now it
                    {"'"}s where i keep my cheatsheets. Feel free to use them.
                </p>
                <h2>Latest content</h2>
                {content.map(({ title, ...delegated }) => (
                    <PostSummary key={title} title={title} {...delegated} />
                ))}
            </div>
        </div>
    );
}
