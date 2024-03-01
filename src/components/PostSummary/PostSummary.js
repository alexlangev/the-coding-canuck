"use client";
import Link from "next/link";
import styles from "./PostSummary.module.css";
import HDBracket from "../HDMarkup/HDBracket";

export default function PostSummary({ slug, title, abstract }) {
    return (
        <HDBracket onHover={true}>
            <article className={styles.wrapper}>
                <Link
                    className={styles.link}
                    href={slug}
                    style={{ textDecoration: "none" }}
                >
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.abstract}>{abstract}</p>
                    <p className={styles.fakeLink}>Read more...</p>
                </Link>
            </article>
        </HDBracket>
    );
}
