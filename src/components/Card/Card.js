"use-client";
import styles from "./Card.module.css";

import PostSummary from "../PostSummary";

export default function Card({ ...delegated }) {
    return (
        <div className={styles.wrapper}>
            <PostSummary {...delegated} />
        </div>
    );
}
