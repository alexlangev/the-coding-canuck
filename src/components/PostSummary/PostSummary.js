"use client";
import Link from "next/link";
import styles from "./PostSummary.module.css";
import HDBracket from "../HDMarkup/HDBracket";

export default function PostSummary({ slug, title, abstract }) {
    return (
        <HDBracket color="black" onHover={true}>
            <article className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.abstract}>{abstract}</p>
                <Link className={styles.link} href={slug}>
                    Read more...
                </Link>
            </article>
        </HDBracket>
    );
}
