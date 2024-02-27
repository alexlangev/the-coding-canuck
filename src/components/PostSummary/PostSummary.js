"use-client";
import { format } from "date-fns";
import { RoughNotation } from "react-rough-notation";
import styles from "./PostSummary.module.css";
import Link from "next/link";

export default function PostSummary({ slug, title, publishedOn, abstract }) {
    console.log(title);
    const humanizedDate = format(new Date(publishedOn), "MMMM do, yyyy");

    return (
        <article>
            <h3 type="highlight" show={true} color="yellow">
                {title}
            </h3>
            <time dateTime={publishedOn}>{humanizedDate}</time>
            <p>{abstract}</p>
            <Link href={slug}>Read more...</Link>
        </article>
    );
}
