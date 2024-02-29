"use-client";
import { format } from "date-fns";
import Link from "next/link";
import HDBracket from "../HDMarkup/HDBracket";
import HDUnderline from "../HDMarkup/HDUnderline";
import styles from "./PostSummary.module.css";

export default function PostSummary({ slug, title, publishedOn, abstract }) {
    const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

    return (
        <HDBracket color={"black"}>
            <article className={styles.wrapper}>
                <h3 className={styles.title}>
                    {/* <HDUnderline> */}
                    {title}
                    {/* </HDUnderline> */}
                </h3>
                {/* <time className={styles.date} dateTime={publishedOn}>
                    {humanizedDate}
                </time> */}
                <p>{abstract}</p>
                <Link className={styles.link} href={slug}>
                    Read more...
                </Link>
            </article>
        </HDBracket>
    );
}
